import { fireEvent, render, screen, within } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks, siteName } from '../data'

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    writable: true,
    value,
  })
}

describe('Navbar', () => {
  beforeEach(() => {
    setScrollY(0)
  })

  it('shows the brand with a trailing dot in white on the dark bar', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: `${siteName}.` })
    expect(brand).toHaveAttribute('href', '#top')
    expect(brand).toHaveClass('text-white')
    expect(screen.getByRole('banner')).toHaveClass('bg-coal')
  })

  it('renders every nav link on the dark bar', () => {
    render(<Navbar />)
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link })).toHaveClass('text-white/80')
    }
  })

  it('switches to a fixed white bar with a shadow once the page is scrolled', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('bg-coal')
    expect(banner).not.toHaveClass('bg-white')

    setScrollY(500)
    fireEvent.scroll(window)

    expect(banner).toHaveClass('bg-white', 'shadow-md')
    expect(banner).not.toHaveClass('bg-coal')
    expect(screen.getByRole('link', { name: `${siteName}.` })).toHaveClass('text-ink')
  })

  it('keeps the dark bar before the scroll threshold', () => {
    render(<Navbar />)
    setScrollY(40)
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveClass('bg-coal')
  })

  it('opens and closes the mobile menu via the toggle', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()

    fireEvent.click(toggle)

    const openToggle = screen.getByRole('button', { name: 'Close menu' })
    expect(openToggle).toHaveAttribute('aria-expanded', 'true')
    const links = screen.getAllByRole('link', { name: 'Home' })
    expect(links).toHaveLength(2)
    const mobileLink = links[1]!
    expect(
      within(mobileLink.closest('div')!).getByRole('link', { name: navLinks[1] }),
    ).toBeInTheDocument()

    fireEvent.click(openToggle)

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link inside it is activated', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileLink = screen.getAllByRole('link', { name: 'Contact' })[1]!
    fireEvent.click(mobileLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
