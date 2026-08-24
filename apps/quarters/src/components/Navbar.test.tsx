import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { NAV_ITEMS } from '../data'

describe('Navbar', () => {
  it('renders the transparent navbar with the brand logo and desktop links', () => {
    const { container } = render(<Navbar />)

    const nav = container.querySelector('nav') as HTMLElement
    expect(nav.className).toMatch(/absolute/)

    const brand = screen.getByRole('link', { name: /Quarters/ })
    expect(brand).toHaveAttribute('href', '#home')
    expect(brand.querySelector('span')?.className).toMatch(/text-brand/)

    for (const item of NAV_ITEMS) {
      if (item.children) {
        expect(screen.getByRole('button', { name: new RegExp(item.label) })).toBeInTheDocument()
      } else {
        expect(screen.getByRole('link', { name: new RegExp(item.label) })).toBeInTheDocument()
      }
    }
  })

  it('reveals the Apartments dropdown on hover with nested Sub Menu items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const apartments = screen.getByRole('button', { name: /Apartments/ })
    expect(apartments).toHaveAttribute('aria-expanded', 'false')

    await user.hover(apartments)
    expect(apartments).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Rooms' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Suites' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()

    await user.unhover(apartments)
    expect(apartments).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the dropdown on focus and closes it on blur', () => {
    render(<Navbar />)

    const apartments = screen.getByRole('button', { name: /Apartments/ })
    fireEvent.focus(apartments)
    expect(apartments).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Rooms' })).toBeInTheDocument()

    fireEvent.blur(apartments)
    expect(apartments).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes the slide-in mobile menu from the hamburger', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.queryByRole('dialog', { name: 'Mobile menu' })).not.toBeInTheDocument()

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const dialog = screen.getByRole('dialog', { name: 'Mobile menu' })
    expect(dialog.className).toMatch(/w-\[300px\]/)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(dialog).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dialog link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile menu' })

    // Activating the mobile brand link also dismisses the panel.
    await user.click(within(dialog).getByRole('link', { name: /Quarters/ }))
    expect(screen.queryByRole('dialog', { name: 'Mobile menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const reopened = screen.getByRole('dialog', { name: 'Mobile menu' })
    await user.click(within(reopened).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile menu' })).not.toBeInTheDocument()
  })
})
