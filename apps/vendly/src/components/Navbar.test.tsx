import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NAV_DROPDOWNS, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the desktop nav links and the Home/About dropdown toggles', () => {
    render(<Navbar mobileOpen={false} onClose={() => {}} />)

    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of NAV_LINKS) {
      expect(within(mainNav).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }
    for (const dropdown of NAV_DROPDOWNS) {
      expect(within(mainNav).getByRole('button', { name: dropdown.label })).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    }
    /* Home is the active page in the original. */
    expect(within(mainNav).getByRole('button', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('opens the Home dropdown, shows its items, and closes on item click', () => {
    render(<Navbar mobileOpen={false} onClose={() => {}} />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })

    const homeToggle = within(mainNav).getByRole('button', { name: 'Home' })
    fireEvent.click(homeToggle)
    expect(homeToggle).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Menu One', 'Menu Two', 'Menu Three', 'Sub Menu']) {
      expect(within(mainNav).getByRole('link', { name: item })).toBeInTheDocument()
    }

    const itemLink = within(mainNav).getByRole('link', { name: 'Sub Menu' })
    itemLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(itemLink)
    expect(homeToggle).toHaveAttribute('aria-expanded', 'false')
    expect(within(mainNav).queryByRole('link', { name: 'Sub Menu' })).not.toBeInTheDocument()
  })

  it('switches between dropdowns and closes one when the other opens', () => {
    render(<Navbar mobileOpen={false} onClose={() => {}} />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const homeToggle = within(mainNav).getByRole('button', { name: 'Home' })
    const aboutToggle = within(mainNav).getByRole('button', { name: 'About' })

    fireEvent.click(homeToggle)
    expect(homeToggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(aboutToggle)
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'true')
    expect(homeToggle).toHaveAttribute('aria-expanded', 'false')
    expect(within(mainNav).getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
  })

  it('closes an open dropdown with Escape', () => {
    render(<Navbar mobileOpen={false} onClose={() => {}} />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const aboutToggle = within(mainNav).getByRole('button', { name: 'About' })

    fireEvent.click(aboutToggle)
    expect(within(mainNav).getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'false')
    expect(within(mainNav).queryByRole('link', { name: 'Menu Two' })).not.toBeInTheDocument()
  })

  it('keeps a dropdown open on other keys and closes it when toggled again', () => {
    render(<Navbar mobileOpen={false} onClose={() => {}} />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const aboutToggle = within(mainNav).getByRole('button', { name: 'About' })

    fireEvent.click(aboutToggle)
    fireEvent.keyDown(window, { key: 'a' })
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'true')

    /* Clicking the open toggle again closes it (ternary close branch). */
    fireEvent.click(aboutToggle)
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'false')
    expect(within(mainNav).queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('renders no mobile panel when closed', () => {
    render(<Navbar mobileOpen={false} onClose={() => {}} />)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('renders the mobile panel with the same links and expands submenus', () => {
    render(<Navbar mobileOpen={true} onClose={() => {}} />)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })

    for (const link of NAV_LINKS) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    const aboutToggle = within(mobileNav).getByRole('button', { name: 'About' })
    fireEvent.click(aboutToggle)
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()

    fireEvent.click(aboutToggle)
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'false')
    expect(within(mobileNav).queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('closes the panel when a mobile submenu item or plain link is chosen', () => {
    const onClose = vi.fn()
    render(<Navbar mobileOpen={true} onClose={onClose} />)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })

    fireEvent.click(within(mobileNav).getByRole('button', { name: 'Home' }))
    const subMenu = within(mobileNav).getByRole('link', { name: 'Sub Menu' })
    subMenu.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(subMenu)
    expect(onClose).toHaveBeenCalledTimes(1)

    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Shop' }))
    expect(onClose).toHaveBeenCalledTimes(2)
  })

  it('resets the mobile submenu when the panel closes', () => {
    const { rerender } = render(<Navbar mobileOpen={true} onClose={() => {}} />)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('button', { name: 'Home' }))
    expect(within(mobileNav).getByRole('link', { name: 'Sub Menu' })).toBeInTheDocument()

    rerender(<Navbar mobileOpen={false} onClose={() => {}} />)
    rerender(<Navbar mobileOpen={true} onClose={() => {}} />)
    const reopened = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(reopened).queryByRole('link', { name: 'Sub Menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile submenu with Escape', () => {
    render(<Navbar mobileOpen={true} onClose={() => {}} />)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('button', { name: 'About' }))
    expect(within(mobileNav).getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(within(mobileNav).queryByRole('link', { name: 'Menu Three' })).not.toBeInTheDocument()
  })
})
