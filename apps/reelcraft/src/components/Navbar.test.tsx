import { describe, expect, it, vi } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /ReelCraft/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('shows the CTA button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Get a Quote/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('applies scrolled style on scroll', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-surface-dark/95')
  })

  it('cleans up scroll listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    removeEventListenerSpy.mockRestore()
  })
})
