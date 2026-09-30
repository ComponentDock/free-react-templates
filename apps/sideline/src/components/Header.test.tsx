import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the utility row with social icons and contact links', () => {
    render(<Header />)
    for (const label of ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /desk@sideline\.example/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+1 232 3532 321/ })).toBeInTheDocument()
  })

  it('renders the black navbar with the Sideline wordmark and uppercase menu', () => {
    render(<Header />)
    // The wordmark link contains the crest image + text (name spans both).
    expect(screen.getAllByRole('link', { name: /Sideline/i }).length).toBeGreaterThan(0)
    // Dropdown items render as buttons; plain items render as links.
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'News' })).toBeInTheDocument()
    for (const label of ['Matches', 'Team', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    // Active item "Home" is brand red in the desktop menu.
    expect(screen.getByRole('button', { name: 'Home' })).toHaveClass('text-brand')
  })

  it('opens and closes the Home dropdown with nested Sub Menu items', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const homeButton = screen.getByRole('button', { name: 'Home' })

    expect(homeButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(homeButton)
    expect(homeButton).toHaveAttribute('aria-expanded', 'true')
    // Panel items + Sub Menu nested items are visible ("Menu Two" appears
    // once in each level).
    expect(screen.getAllByText('Menu Two')).toHaveLength(2)
    expect(screen.getByText('Sub Menu')).toBeInTheDocument()
    // Panel styling: #edf0f5 panel background.
    const panel = screen.getAllByText('Menu Two')[0]!.closest('ul')!
    expect(panel).toHaveClass('bg-panel')

    await user.click(homeButton)
    expect(homeButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Sub Menu')).not.toBeInTheDocument()
    expect(screen.queryByText('Menu Two')).not.toBeInTheDocument()
  })

  it('opens the News dropdown without a Sub Menu section', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const newsButton = screen.getByRole('button', { name: 'News' })

    await user.click(newsButton)
    expect(newsButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Menu One')).toBeInTheDocument()
    expect(screen.queryByText('Sub Menu')).not.toBeInTheDocument()
  })

  it('toggles the fullscreen dark mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-menu')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })

  it('closes the mobile menu via the close icon and via a link', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(toggle)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()

    await user.click(toggle)
    // Mobile links render after the desktop ones; index the mobile one last.
    const mobileMatches = screen.getAllByRole('link', { name: 'Matches' })
    const mobileLink = mobileMatches[mobileMatches.length - 1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    })
    await user.click(mobileLink)
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })
})
