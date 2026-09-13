import { describe, expect, it, vi } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Techwise/i })).toHaveAttribute('href', '#home')
    for (const link of ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the Get a Quote CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Get a Quote/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('applies shadow-md class on scroll', () => {
    vi.useFakeTimers()
    render(<Navbar />)
    const header = document.getElementById('techwise-header')
    expect(header).not.toBeNull()
    expect(header!.classList.contains('shadow-md')).toBe(false)

    // Simulate scroll past threshold
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header!.classList.contains('shadow-md')).toBe(true)

    // Simulate scroll back to top
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header!.classList.contains('shadow-md')).toBe(false)
    vi.useRealTimers()
  })

  it('cleans up scroll listener on unmount', () => {
    const { unmount } = render(<Navbar />)
    unmount()
  })
})
