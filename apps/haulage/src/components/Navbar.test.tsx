import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

/* user-event performs jsdom hash-navigation on in-page anchors, which can
   race with React's handler; native target listeners run first, so attach
   a one-shot preventDefault before clicking anchors (see ai-context). */
function clickAnchor(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
  fireEvent.click(anchor)
}

describe('Navbar', () => {
  it('renders the logo and all ten menu links on desktop', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Haulage' })).toHaveAttribute('href', '#home')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label, hidden: true })).toBeInTheDocument()
    }
    expect(mainNav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('adds a shadow once the page is scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('shadow-[0_4px_20px_-5px_rgba(0,0,0,.2)]')

    window.scrollY = 120
    fireEvent.scroll(window)
    expect(header).toHaveClass('shadow-[0_4px_20px_-5px_rgba(0,0,0,.2)]')
  })

  it('opens the mobile menu from the toggle and closes it with Escape', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()

    /* Other keys leave the menu open; Escape closes it. */
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    /* With the panel open, "Contact" exists in both the desktop and mobile
       navs — click the one inside the mobile panel. */
    const contact = within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
      name: 'Contact',
    })
    clickAnchor(contact)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via the close button', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
