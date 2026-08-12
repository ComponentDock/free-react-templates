import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows three social icon links on the left', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('shows the centered site logo and the utility switches', () => {
    render(<Header />)
    expect(
      screen.getByText(
        (_, element) => element?.tagName === 'P' && element.textContent === 'Framely',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument()
  })

  it('shows uppercase nav links with Home active and a Blog submenu', () => {
    render(<Header />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toBeInTheDocument()
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Single' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu from the menu switch', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuSwitch = screen.getByRole('button', { name: /menu/i })
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()

    // Desktop nav is a horizontal bar; the menu switch toggles a mobile panel.
    await user.click(menuSwitch)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()

    await user.click(menuSwitch)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link or submenu link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()

    await user.click(screen.getAllByRole('link', { name: 'About' }).at(-1)!)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /menu/i }))
    await user.click(screen.getAllByRole('link', { name: 'Blog Single' }).at(-1)!)
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })

  it('opens the fullscreen search overlay from the search switch and closes it', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const searchSwitch = screen.getByRole('button', { name: /search/i })
    await user.click(searchSwitch)
    expect(screen.getByPlaceholderText('Search here.....')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(screen.queryByPlaceholderText('Search here.....')).not.toBeInTheDocument()
  })
})
