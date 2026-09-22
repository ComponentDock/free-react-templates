import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the EDDY logo and all navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'EDDY' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Rooms', 'Gallery', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('renders with transparent background initially', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
  })

  it('applies dark background when scrolled past threshold', async () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    // Simulate scroll event with scrollY > 50
    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-charcoal/95')
    expect(header.className).toContain('shadow-lg')
  })

  it('remains transparent when scrolled below threshold', async () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')

    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 20, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-transparent')
  })

  it('cleans up scroll listener on unmount', async () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeSpy.mockRestore()
  })
})
