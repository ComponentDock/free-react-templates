import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { PHONE_DISPLAY } from '../data'

describe('Navbar', () => {
  it('renders the brand, desktop links, and phone number', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: /^Fiscal/ })
    expect(brand).toHaveAttribute('href', '#home-section')
    expect(screen.getAllByRole('navigation', { name: 'Main navigation' })).toHaveLength(1)
    for (const label of ['Home', 'Services', 'About', 'Contact Us']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Solutions' })).toBeInTheDocument()
    expect(screen.getByText(PHONE_DISPLAY)).toBeInTheDocument()
  })

  it('opens and closes the Solutions dropdown on click', () => {
    render(<Navbar />)
    const trigger = screen.getByRole('button', { name: 'Solutions' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the dropdown on hover and closes on mouse leave', () => {
    render(<Navbar />)
    const wrapper = screen.getByRole('button', { name: 'Solutions' }).parentElement!
    fireEvent.mouseEnter(wrapper)
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the nested submenu on hover and closes it when the pointer leaves it', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    const subWrapper = screen.getByRole('button', { name: 'Dropdown' }).parentElement!
    fireEvent.mouseEnter(subWrapper)
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()
    fireEvent.mouseLeave(subWrapper)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('toggles the nested submenu with a click', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    const subTrigger = screen.getByRole('button', { name: 'Dropdown' })
    expect(subTrigger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(subTrigger)
    expect(subTrigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    fireEvent.click(subTrigger)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
  })

  it('keeps the dropdown open when a non-Escape key is pressed', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
  })

  it('keeps the dropdown open when clicking inside the header', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    fireEvent.mouseDown(screen.getByRole('button', { name: 'Solutions' }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
  })

  it('does not open the submenu when hovering a plain menu item', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    const menuOneWrapper = screen.getByRole('link', { name: 'Menu One' }).parentElement!
    fireEvent.mouseEnter(menuOneWrapper)
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).not.toBeInTheDocument()
  })

  it('closes the dropdown on Escape', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('closes the dropdown on an outside mousedown', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the mobile menu and closes it via the close button', () => {
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Open menu', hidden: true })
    fireEvent.click(burger)
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(within(dialog).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    fireEvent.click(within(dialog).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nested link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Menu One' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const reopened = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(reopened).getByRole('link', { name: 'Sub Menu One' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on Escape', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on an outside mousedown', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
