import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

afterEach(() => {
  setScrollY(0)
})

describe('Navbar', () => {
  it('renders the brand, nav links and CTA buttons over the hero', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Vocare' })).toBeInTheDocument()
    for (const label of ['Home', 'Browse Jobs', 'Candidates', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Post a Job' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Want a Job' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
  })

  it('is transparent at the top and turns into a fixed white bar on scroll', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner.className).toContain('bg-transparent')
    expect(banner.className).not.toContain('bg-white')

    setScrollY(140)
    fireEvent.scroll(window)

    expect(banner.className).toContain('fixed')
    expect(banner.className).toContain('bg-white')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-brand')
  })

  it('scrolls back to transparent when returning to the top', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')

    setScrollY(140)
    fireEvent.scroll(window)
    expect(banner.className).toContain('bg-white')

    setScrollY(0)
    fireEvent.scroll(window)
    expect(banner.className).not.toContain('bg-white')
  })

  it('opens and closes the mobile menu with the toggler', () => {
    render(<Navbar />)
    const toggler = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    // Mobile panel shows the same links + CTAs (desktop + panel copies)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Want a Job' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Post a Job' })).toHaveLength(2)

    fireEvent.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(1)
  })

  it('cleans up its scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
