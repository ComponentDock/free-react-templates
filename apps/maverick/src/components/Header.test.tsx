import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Header', () => {
  it('renders the brand and the full desktop navigation', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /^MAVERICK$/ })).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of [
      'Home',
      'About',
      'Resume',
      'Services',
      'Skills',
      'Projects',
      'My Blog',
      'Contact',
    ]) {
      expect(within(desktopNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('starts transparent and turns black after scrolling', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('bg-black')

    fireEvent.scroll(window, { target: { scrollY: 120 } })
    expect(header.className).toContain('bg-black')

    fireEvent.scroll(window, { target: { scrollY: 0 } })
    expect(header.className).not.toContain('bg-black')
  })

  it('opens and closes the mobile menu with the toggle and Escape', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    /* A non-Escape key leaves the menu open. */
    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'About' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
