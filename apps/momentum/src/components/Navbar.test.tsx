import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { brand, navLinks } from '../data'

/** Shrink the viewport to mobile width so Tailwind's `lg:` queries stop
    applying (jsdom applies the injected CSS; default innerWidth is 1024). */
function setMobileViewport() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 640,
  })
  window.dispatchEvent(new Event('resize'))
}

describe('Navbar', () => {
  it('renders the wordmark and desktop nav links with Home active', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: brand })).toBeInTheDocument()
    for (const link of navLinks) {
      if ((link.children?.length ?? 0) > 0) continue
      expect(within(nav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    // The Dropdown entry is a disclosure button, not a link.
    expect(within(nav).getByRole('button', { name: /Dropdown/ })).toBeInTheDocument()
  })

  it('opens the Dropdown panel with Menu One, Menu Two and Menu Three', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })

    const dropdown = within(nav).getByRole('button', { name: /Dropdown/ })
    await user.click(dropdown)

    const panel = screen.getByRole('list', { name: 'Dropdown menu' })
    expect(within(panel).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(within(panel).getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
  })

  it('expands the nested submenu under Menu Two', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })

    await user.click(within(nav).getByRole('button', { name: /Dropdown/ }))
    await user.click(screen.getByRole('button', { name: /Menu Two/ }))

    const submenu = screen.getByRole('list', { name: 'Sub menu' })
    expect(within(submenu).getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    expect(within(submenu).getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()
    expect(within(submenu).getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()
  })

  it('opens and closes the mobile slide-in panel', async () => {
    setMobileViewport()
    const user = userEvent.setup()
    render(<Navbar />)

    const burger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(burger)

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('expands and collapses the Dropdown entry inside the mobile panel', async () => {
    setMobileViewport()
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })

    const dropdown = within(mobileNav).getByRole('button', { name: /Dropdown/ })
    await user.click(dropdown)
    expect(within(mobileNav).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')

    await user.click(dropdown)
    expect(within(mobileNav).queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
  })
})
