import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, desktop links, and burger toggle', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: /^Consignly/ })
    expect(brand).toHaveAttribute('href', '#home')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const label of ['Home', 'Services', 'About', 'Contact Us']) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringMatching(/^#/),
      )
    }
    expect(within(nav).getByRole('button', { name: 'Dropdown' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('marks the active link with aria-current', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Services' })).not.toHaveAttribute('aria-current')
  })

  it('opens and closes the Dropdown panel on click', () => {
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: 'Dropdown' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the dropdown on hover and closes on mouse leave', () => {
    render(<Navbar />)
    const wrapper = screen.getByRole('button', { name: 'Dropdown' }).parentElement!
    fireEvent.mouseEnter(wrapper)
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the nested submenu on hover over Menu Two and closes on leave', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    const subWrapper = screen.getByRole('button', { name: 'Menu Two' }).parentElement!
    fireEvent.mouseEnter(subWrapper)
    for (const label of ['Sub Menu One', 'Sub Menu Two', 'Sub Menu Three']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    fireEvent.mouseLeave(subWrapper)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('toggles the nested submenu with a click', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    const subTrigger = screen.getByRole('button', { name: 'Menu Two' })
    expect(subTrigger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(subTrigger)
    expect(subTrigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    fireEvent.click(subTrigger)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
  })

  it('keeps the dropdown open on a non-Escape key', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
  })

  it('keeps the dropdown open when clicking inside the navbar', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    fireEvent.mouseDown(screen.getByRole('link', { name: 'Home' }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
  })

  it('does not open the submenu when hovering a plain menu item', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    const menuOne = screen.getByRole('link', { name: 'Menu One' })
    fireEvent.mouseEnter(menuOne.parentElement!)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
  })

  it('closes the dropdown on Escape', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('closes the dropdown on an outside mousedown', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the mobile menu and closes it via the close button', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(within(dialog).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    fireEvent.click(within(dialog).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Menu One' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a top-level link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a grandchild link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Sub Menu One' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the brand link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: /Consignly/ }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on Escape', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on an outside mousedown', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('keeps the mobile menu open when clicking the panel', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(dialog)
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('closes the mobile menu when clicking the backdrop overlay', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(dialog.parentElement!)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
