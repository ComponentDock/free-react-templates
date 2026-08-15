import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { menuCloseLabel, menuTriggerLabel, navItems, navLabel, siteName } from '../data'

describe('Navbar', () => {
  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1024,
    })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  })

  it('renders the brand and the top-level nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      expect(within(desktopNav).getAllByRole('link', { name: item.label })[0]).toBeInTheDocument()
    }
    // Dropdown children are present (CSS-hidden until hover in the browser).
    expect(
      within(desktopNav).getAllByRole('link', { name: 'Single Blog', hidden: true }),
    ).toHaveLength(1)
    expect(
      within(desktopNav).getAllByRole('link', { name: 'Accommodation', hidden: true }),
    ).toHaveLength(1)
    expect(
      within(desktopNav).getAllByRole('link', { name: 'Elements', hidden: true }),
    ).toHaveLength(1)
  })

  it('turns the header white with a shadow once the page is scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('bg-white')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 300 })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    fireEvent.scroll(window)
    expect(header.className).not.toContain('bg-white')
  })

  it('underlines nav links on hover via the brand accent', () => {
    render(<Navbar />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home.className).toContain('after:bg-brand')
  })

  it('opens and closes the mobile menu', () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 375,
    })
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    fireEvent.click(trigger)

    const mobileNav = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Our Story' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()

    // A child link closes the menu (native preventDefault neutralizes the
    // jsdom hash navigation so the React onClick still fires).
    const singleBlog = within(mobileNav).getByRole('link', { name: 'Single Blog' })
    singleBlog.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    })
    fireEvent.click(singleBlog)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // A top-level link closes the menu too.
    fireEvent.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const reopened = screen.getByRole('navigation', {
      name: 'Mobile navigation',
    })
    const contact = within(reopened).getByRole('link', { name: 'Contact' })
    contact.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    })
    fireEvent.click(contact)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // And the close button dismisses it.
    fireEvent.click(screen.getByRole('button', { name: menuTriggerLabel }))
    fireEvent.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
