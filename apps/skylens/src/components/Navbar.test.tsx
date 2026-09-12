import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    vi.spyOn(window, 'addEventListener')
    vi.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('SkyLens')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('has transparent background initially', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('bg-transparent')
  })

  it('applies sticky background on scroll', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')!
    // Simulate scroll past threshold
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-brand-light')
  })

  it('cleans up scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
