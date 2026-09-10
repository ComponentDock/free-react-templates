import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Buzzer/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders a phone number button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('+880 156 278 256')).toBeInTheDocument()
  })

  it('has a sticky header', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('sticky')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible()

    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps mobile menu open when resized to a narrow viewport', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible()

    // Simulate resize to narrow width — menu should stay open
    act(() => {
      window.innerWidth = 500
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible()
  })

  it('closes mobile menu when window resizes to desktop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeVisible()

    // Simulate resize to desktop width
    act(() => {
      window.innerWidth = 1280
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeVisible()

    // Click a link inside the mobile nav using within()
    await user.click(within(mobileNav).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
