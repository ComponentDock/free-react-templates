import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand, primary links, and phone number', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const item of NAV_LINKS) {
      expect(within(nav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /123-489-9381/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Concierge' })).toBeInTheDocument()
  })

  it('opens the Destination submenu on hover and closes on leave', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const destination = within(nav).getByRole('link', { name: /Destination/ })
    const li = destination.closest('li')!
    fireEvent.mouseEnter(li)

    expect(screen.getAllByText('Menu One')[0]!).toBeInTheDocument()
    expect(screen.getAllByText('Menu Two')[0]!).toBeInTheDocument()

    // the nested submenu needs its own hover on the Dropdown item
    const nestedTrigger = screen.getAllByText('Dropdown')[0]!
    const nestedBox = nestedTrigger.closest('div')!
    fireEvent.mouseEnter(nestedBox)
    expect(screen.getAllByText('Sub Menu One')[0]!).toBeInTheDocument()
    expect(screen.getAllByText('Sub Menu Three')[0]!).toBeInTheDocument()

    // leaving the nested box closes the whole dropdown (the child's
    // mouseleave bubbles to the parent wrapper — React mouseout delegation)
    fireEvent.mouseLeave(nestedBox)
    expect(screen.queryByText('Sub Menu One')).not.toBeInTheDocument()
    expect(screen.queryByText('Menu One')).not.toBeInTheDocument()
  })

  it('keeps the submenu open when moving into it and closes on leave', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const destination = within(nav).getByRole('link', { name: /Destination/ })
    const li = destination.closest('li')!
    fireEvent.mouseEnter(li)

    const menuOne = screen.getAllByText('Menu One')[0]! as HTMLElement
    fireEvent.mouseEnter(menuOne.closest('li')!)
    // moving from the trigger into the flyout keeps the dropdown open
    expect(screen.getAllByText('Menu One')[0]!).toBeInTheDocument()

    // leaving the whole dropdown box closes everything (the nested item's
    // own mouseleave bubbles to the parent wrapper — Barrister pattern).
    fireEvent.mouseLeave(li)
    expect(screen.queryByText('Menu One')).not.toBeInTheDocument()
  })

  it('turns solid white once the page is scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')

    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens the mobile menu with inline-expanded dropdowns and closes via a link', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()

    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu via the close button', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dropdown child or the phone link is activated', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    let mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Menu One' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Sub Menu One' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: /123-489-9381/ }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('uses the solid dark-link styling for the mobile menu once scrolled', () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav.className).toContain('bg-white')
    expect(within(mobileNav).getByRole('link', { name: 'Services' }).className).toContain(
      'text-ink/80',
    )
    expect(within(mobileNav).getByRole('link', { name: 'Menu One' }).className).toContain(
      'text-ink/60',
    )
    expect(within(mobileNav).getByRole('link', { name: 'Sub Menu One' }).className).toContain(
      'text-ink/50',
    )
  })
})
