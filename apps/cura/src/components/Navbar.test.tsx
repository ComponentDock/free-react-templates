import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar, DARK_KEY } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the brand, tagline, links, CTA and dark toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /cura home/i })).toBeInTheDocument()
    expect(screen.getByText('Cura')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Center')).toBeInTheDocument()
    for (const label of ['Home', 'Services', 'Doctors', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Book Appointment' }).length).toBe(2)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('marks Home as the active page link', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks[0]).toHaveAttribute('aria-current', 'page')
  })

  it('toggles dark mode on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('1')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(DARK_KEY)).toBe('0')
  })

  it('opens the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the mobile menu open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    await user.keyboard('{ArrowDown}')
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const doctorsLinks = screen.getAllByRole('link', { name: 'Doctors' })
    await user.click(doctorsLinks[doctorsLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when the mobile CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const ctaLinks = screen.getAllByRole('link', { name: 'Book Appointment' })
    await user.click(ctaLinks[ctaLinks.length - 1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
