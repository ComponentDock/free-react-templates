import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand and the six desktop links with Home active', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' })
    expect(within(nav).getByRole('link', { name: /Mentory/ })).toBeInTheDocument()
    for (const label of ['Home', 'Tutorials', 'Testimonials', 'Blog', 'About', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('starts closed with the hamburger reflecting aria-expanded false', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu', hidden: true })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation', hidden: true })).toBeNull()
  })

  it('opens the off-canvas menu, lists the six links, and closes via the close control', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    expect(screen.getByRole('button', { name: 'Open menu', hidden: true })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation', hidden: true })
    for (const label of ['Home', 'Tutorials', 'Testimonials', 'Blog', 'About', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    fireEvent.click(within(mobileNav).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation', hidden: true })).toBeNull()
    expect(screen.getByRole('button', { name: 'Open menu', hidden: true })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the menu when a mobile link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation', hidden: true })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Tutorials' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation', hidden: true })).toBeNull()
  })

  it('closes the menu when the backdrop is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
    const backdrop = document.querySelector('[role="presentation"]')
    expect(backdrop).not.toBeNull()
    fireEvent.click(backdrop!)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation', hidden: true })).toBeNull()
  })
})
