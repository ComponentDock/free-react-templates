import { describe, expect, it } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('displays the brand name Artistry with a period', () => {
    render(<Header />)
    const brand = screen.getByRole('link', { name: /Artistry/i })
    expect(brand).toBeInTheDocument()
    expect(brand).toHaveAttribute('href', '#home')
  })

  it('renders all 5 navigation links', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Works' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it("renders a Let's Talk border button in the header", () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Let's Talk/i })).toBeInTheDocument()
  })

  it('opens the mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it("closes mobile menu when Let's Talk is clicked", async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: /Let's Talk/i }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('adds backdrop-blur when the page is scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-dark-navy')
    expect(header).not.toHaveClass('bg-dark-navy/95')
    // Simulate scroll
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-dark-navy/95')
  })
})
