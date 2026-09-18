import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the CabSpot logo', () => {
    render(<Navbar />)
    expect(screen.getByText('CabSpot')).toBeInTheDocument()
  })

  it('renders all navigation links (desktop + mobile)', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: /home/i })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /services/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /gallery/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /blog/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('applies scrolled styles when page is scrolled', () => {
    render(<Navbar />)
    const header = document.querySelector('header')!
    // Simulate scroll past threshold
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-md')
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByRole('button', { name: /open menu/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile nav link — should close the menu
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    // The mobile link is the one inside the mobile nav (visible after toggle)
    const lastHomeLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(lastHomeLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has proper aria attributes', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-controls',
      'mobile-menu',
    )
  })
})
