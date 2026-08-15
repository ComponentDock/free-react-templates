import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('shows the top utility bar with email, phone, and Donate Now', () => {
    render(<Header />)
    const topBar = screen.getByLabelText('Top utility bar')
    expect(within(topBar).getByText('MAIL:')).toBeInTheDocument()
    expect(within(topBar).getByText('contact@ourcharity.com')).toBeInTheDocument()
    expect(within(topBar).getByText('PHONE:')).toBeInTheDocument()
    expect(within(topBar).getByText('+24 3772 120 091 / +56452 4567')).toBeInTheDocument()
    expect(within(topBar).getByRole('link', { name: 'Donate Now' })).toBeInTheDocument()
  })

  it('renders the brand wordmark and the main nav links', () => {
    render(<Header />)
    expect(screen.getByText('Amity')).toBeInTheDocument()
    for (const label of ['Home', 'About us', 'Causes', 'Gallery', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('marks the current page link with the orange active style', () => {
    render(<Header />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'true')
    expect(home.className).toContain('border-brand')
    expect(home.className).toContain('text-brand')
  })

  it('opens and closes the mobile drawer from the hamburger', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const drawer = screen.getByLabelText('Mobile navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(drawer).getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile drawer from the backdrop overlay and from a link', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    await user.click(toggle)
    const drawer = screen.getByLabelText('Mobile navigation')
    const backdrop = drawer.parentElement!.firstElementChild as HTMLElement
    await user.click(backdrop)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()

    await user.click(toggle)
    const link = within(screen.getByLabelText('Mobile navigation')).getByRole('link', {
      name: 'Causes',
    })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
