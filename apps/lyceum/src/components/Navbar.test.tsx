import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { menuCloseLabel, menuTriggerLabel, navItems, siteName } from '../data'

describe('Navbar', () => {
  it('renders the brand with a graduation-cap mark', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: siteName })
    expect(brand).toHaveAttribute('href', '#')
  })

  it('renders all nav links with Home active and dropdown children', () => {
    render(<Navbar />)

    for (const item of navItems) {
      const links = screen.getAllByRole('link', { name: item.label })
      expect(links.length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    // Dropdown children are in the DOM for keyboard/hover access.
    expect(screen.getByRole('link', { name: 'Course Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
  })

  it('adds a shadow when the page is scrolled', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.getAttribute('class')).not.toContain('shadow-[0_3px_16px_rgba(0,0,0,0.1)]')

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header.getAttribute('class')).toContain('shadow-[0_3px_16px_rgba(0,0,0,0.1)]')

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    fireEvent.scroll(window)
    expect(header.getAttribute('class')).not.toContain('shadow-[0_3px_16px_rgba(0,0,0,0.1)]')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()

    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

    const mobileLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dropdown child link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const childLinks = screen.getAllByRole('link', { name: 'Course Details' })
    expect(childLinks).toHaveLength(2)
    await user.click(childLinks[childLinks.length - 1]!)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('cleans up the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
