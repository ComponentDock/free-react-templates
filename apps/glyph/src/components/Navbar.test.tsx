import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and header social icons', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Glyph' })).toBeInTheDocument()
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Facebook', 'Twitter', 'Behance', 'Dribbble']) {
      expect(within(mainNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the top-level nav links and marks Home as the current page', () => {
    render(<Navbar />)

    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of ['Home', 'Category', 'Archive', 'Contact']) {
      expect(within(mainNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('keeps the Pages submenu collapsed until toggled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle pages menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(mainNav).getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu, expands the Pages submenu, and closes', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const dialog = screen.getByRole('dialog', { name: 'Menu' })
    const mobileNav = within(dialog).getByRole('navigation', { name: 'Mobile' })
    for (const link of ['Home', 'Category', 'Archive', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: link })).toBeInTheDocument()
    }

    await user.click(within(mobileNav).getByRole('button', { name: 'Toggle pages menu' }))
    expect(within(mobileNav).getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Elements' })).toBeInTheDocument()
  })

  it('closes the mobile menu via the drawer close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Menu' })

    await user.click(within(dialog).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when clicking the overlay', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const overlay = container.querySelector('div[aria-hidden="true"]')!
    fireEvent.click(overlay)

    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when picking a link or a Pages submenu item', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = within(screen.getByRole('dialog', { name: 'Menu' })).getByRole('navigation', {
      name: 'Mobile',
    })

    await user.click(within(mobileNav).getByRole('link', { name: 'Category' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopenedNav = within(screen.getByRole('dialog', { name: 'Menu' })).getByRole(
      'navigation',
      { name: 'Mobile' },
    )
    await user.click(within(reopenedNav).getByRole('button', { name: 'Toggle pages menu' }))
    await user.click(within(reopenedNav).getByRole('link', { name: 'Elements' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('shows the header socials inside the mobile menu too', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = within(screen.getByRole('dialog', { name: 'Menu' })).getByRole('navigation', {
      name: 'Mobile',
    })
    expect(within(mobileNav).getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })
})
