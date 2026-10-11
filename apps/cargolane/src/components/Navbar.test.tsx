import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, configurable: true })
}

describe('Navbar', () => {
  afterEach(() => {
    setScrollY(0)
    document.body.innerHTML = ''
  })

  it('overlays the hero with white branding and no solid background', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('absolute')
    expect(header.className).not.toContain('bg-white')
    expect(screen.getByRole('link', { name: 'Cargolane' }).className).toContain('text-white')
    expect(screen.getByRole('link', { name: 'Home' }).className).toContain('text-primary')
    for (const label of [
      'About Us',
      'How It Works',
      'Our Team',
      'Services',
      'Industries',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: label }).className).toContain('text-white')
    }
  })

  it('solidifies on scroll with a white background, black links, and a soft shadow', () => {
    render(<Navbar />)
    setScrollY(400)
    fireEvent.scroll(window)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('fixed')
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-')
    expect(screen.getByRole('link', { name: 'Cargolane' }).className).toContain('text-primary')
    expect(screen.getByRole('link', { name: 'Blog' }).className).toContain('text-black')
  })

  it('links every nav item to its section anchor', () => {
    render(<Navbar />)
    const expected: Record<string, string> = {
      Home: '#home',
      'About Us': '#about',
      'How It Works': '#how-it-works',
      'Our Team': '#team',
      Services: '#services',
      Industries: '#industries',
      Blog: '#blog',
      Contact: '#contact',
    }
    for (const [label, href] of Object.entries(expected)) {
      expect(screen.getAllByRole('link', { name: label })[0]).toHaveAttribute('href', href)
    }
  })

  it('marks the active section link orange with aria-current', () => {
    render(<Navbar />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home).toHaveAttribute('aria-current', 'true')
    expect(home.className).toContain('text-primary')
    expect(screen.getAllByRole('link', { name: 'Blog' })[0]).not.toHaveAttribute('aria-current')
  })

  it('tracks the active section from scroll position', () => {
    render(<Navbar />)
    const about = document.createElement('div')
    about.id = 'about'
    document.body.appendChild(about)
    vi.spyOn(about, 'getBoundingClientRect').mockReturnValue({ top: -100 } as DOMRect)
    setScrollY(300)
    fireEvent.scroll(window)
    expect(screen.getAllByRole('link', { name: 'About Us' })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('toggles the mobile menu with aria-expanded and closes on navigation', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobileLink = screen.getAllByRole('link', { name: 'Services' })[1]!
    fireEvent.click(mobileLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('cleans up its scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(() => {
      act(() => {
        setScrollY(900)
        fireEvent.scroll(window)
      })
    }).not.toThrow()
  })
})
