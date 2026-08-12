import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterAll, describe, expect, it } from 'vitest'
import { NAV_LINKS } from '../data'
import { Navbar } from './Navbar'

const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY')

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
}

describe('Navbar', () => {
  it('renders the wordmark and five plain text links with no CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Meridian home' })).toHaveTextContent('Meridian')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(mainNav).getAllByRole('link')).toHaveLength(NAV_LINKS.length + 1)
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    /* Only the hamburger toggle is a button — no call-to-action. */
    expect(screen.getAllByRole('button')).toHaveLength(1)
  })

  it('turns solid white with a shadow and a green logo once scrolled', () => {
    render(<Navbar />)
    const header = document.querySelector('header')!
    const logo = screen.getByRole('link', { name: 'Meridian home' })
    expect(header.className).toContain('bg-transparent')
    expect(logo.className).toContain('text-black')
    setScrollY(300)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-')
    expect(logo.className).toContain('text-brand')
    setScrollY(0)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens and closes the slide-in mobile menu', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via the close button or the backdrop', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

afterAll(() => {
  if (originalScrollY) {
    Object.defineProperty(window, 'scrollY', originalScrollY)
  }
})
