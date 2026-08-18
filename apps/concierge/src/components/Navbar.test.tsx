import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, desktop links, dropdown trigger, and phone number', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'CONCIERGE' })).toHaveAttribute('href', '#home')

    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primary).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(primary).getByRole('link', { name: 'Destination' })).toBeInTheDocument()
    expect(within(primary).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(within(primary).getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    expect(within(primary).getByRole('button', { name: /Dropdown/ })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(within(primary).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(primary).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(primary).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: '123-489-9381' })).toHaveAttribute(
      'href',
      'tel:123-489-9381',
    )
  })

  it('opens and closes the dropdown submenu on click', () => {
    render(<Navbar />)
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    const trigger = within(primary).getByRole('button', { name: /Dropdown/ })

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const menu = document.querySelector('[data-dropdown-menu]')!
    expect(menu).not.toBeNull()
    expect(within(menu as HTMLElement).getByRole('link', { name: 'Sub Menu One' })).toHaveAttribute(
      'href',
      '#dropdown',
    )
    expect(
      within(menu as HTMLElement).getByRole('link', { name: 'Sub Menu Two' }),
    ).toBeInTheDocument()
    expect(
      within(menu as HTMLElement).getByRole('link', { name: 'Sub Menu Three' }),
    ).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-dropdown-menu]')).toBeNull()
  })

  it('opens the mobile menu from the hamburger and closes it again', () => {
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()
  })

  it('expands the dropdown inline inside the mobile menu', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    const triggers = within(mobile).getAllByRole('button', { name: /Dropdown/ })
    expect(triggers).toHaveLength(1)

    fireEvent.click(triggers[0]!)
    expect(triggers[0]).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobile).getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()

    fireEvent.click(triggers[0]!)
    expect(within(mobile).queryByRole('link', { name: 'Sub Menu One' })).toBeNull()
  })

  it('turns solid (theme changes) after scrolling', () => {
    render(<Navbar />)
    const header = document.querySelector('[data-navbar]')!
    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)

    expect(header.className).toContain('bg-white')
    expect(screen.getByRole('link', { name: 'CONCIERGE' }).className).toContain('text-ink')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
