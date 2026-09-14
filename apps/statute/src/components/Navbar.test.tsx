import { describe, expect, it, vi } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Statute/i })).toHaveAttribute('href', '#home')
    for (const link of [
      'Home',
      'About',
      'Practice Areas',
      'Attorneys',
      'Pricing',
      'Case Studies',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    render(<Navbar />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Practice Areas' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('applies shadow-md class on scroll', () => {
    vi.useFakeTimers()
    render(<Navbar />)
    const header = document.getElementById('statute-header')
    expect(header).not.toBeNull()
    expect(header!.classList.contains('shadow-md')).toBe(false)

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header!.classList.contains('shadow-md')).toBe(true)

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
