import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BRAND, CONTACT, SOCIALS } from '../data'

const ICON_LABELS = SOCIALS.map((s) => s.label)

describe('Navbar', () => {
  it('renders the top info bar with contact details and social links', () => {
    render(<Navbar />)

    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.email)).toBeInTheDocument()
    ICON_LABELS.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
  })

  it('renders the brand logo and all main navigation links with Home active', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(screen.getAllByText(BRAND).length).toBeGreaterThan(0)
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contacts' })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown via the trigger button', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const trigger = within(nav).getByRole('button', { name: /pages/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const menu = within(nav).getByRole('menu', { name: 'Pages submenu' })
    expect(within(menu).getByRole('menuitem', { name: 'Places' })).toBeInTheDocument()
    expect(within(menu).getByRole('menuitem', { name: 'Places Details' })).toBeInTheDocument()
    expect(within(menu).getByRole('menuitem', { name: 'Blog Details' })).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(within(nav).queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens the dropdown on hover and closes when the mouse leaves', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const trigger = within(nav).getByRole('button', { name: /pages/i })
    const wrapper = trigger.closest('div')!

    fireEvent.mouseEnter(wrapper)
    expect(within(nav).getByRole('menu', { name: 'Pages submenu' })).toBeInTheDocument()

    fireEvent.mouseLeave(wrapper)
    expect(within(nav).queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes the dropdown on Escape and on outside click', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const trigger = within(nav).getByRole('button', { name: /pages/i })

    fireEvent.click(trigger)
    expect(within(nav).getByRole('menu')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(within(nav).queryByRole('menu')).not.toBeInTheDocument()

    fireEvent.click(trigger)
    fireEvent.mouseDown(document.body)
    expect(within(nav).queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens the mobile drawer, shows the same links plus submenu, and closes via close button', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu', hidden: true })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByText('Pages')).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Places' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contacts' })).toBeInTheDocument()

    fireEvent.click(within(mobileNav).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile drawer via overlay click, Escape, and a link click', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu', hidden: true })
    fireEvent.click(toggle)
    let mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()

    fireEvent.click(document.querySelector('.fixed.inset-0 [aria-hidden="true"]')!)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Contacts' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile drawer when a submenu link is chosen', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Places Details' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('keeps the dropdown open on non-Escape keys and clicks inside the nav', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const trigger = within(nav).getByRole('button', { name: /pages/i })

    fireEvent.click(trigger)
    expect(within(nav).getByRole('menu')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Enter' })
    expect(within(nav).getByRole('menu')).toBeInTheDocument()

    fireEvent.mouseDown(trigger)
    expect(within(nav).getByRole('menu')).toBeInTheDocument()
  })

  it('removes window listeners on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalled()
  })
})
