import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, CTA and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Hush home' })).toBeInTheDocument()
    expect(screen.getByText('Hush')).toBeInTheDocument()
    for (const label of [
      'Retreats',
      'Spiritual Direction',
      'Sacred Spaces',
      'Resources',
      'Connect',
    ]) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Book a Retreat' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the .dark class and reflects the current mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('hush-theme')).toBe('dark')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('expands the mobile menu and reflects aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    const retreatsLinks = screen.getAllByRole('link', { name: 'Retreats' })
    await user.click(retreatsLinks[retreatsLinks.length - 1]!)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    const bookLinks = screen.getAllByRole('link', { name: 'Book a Retreat' })
    await user.click(bookLinks[bookLinks.length - 1]!)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches to the solid header style once the page is scrolled', async () => {
    render(<Navbar />)
    const header = document.querySelector('header')
    expect(header?.className).not.toContain('bg-white/95')
    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await waitFor(() => {
      expect(header?.className).toContain('bg-white/95')
      expect(header?.className).toContain('shadow-sm')
    })
  })

  it('cleans up scroll listener and dark class on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    addSpy.mockRestore()
    removeSpy.mockRestore()
  })
})
