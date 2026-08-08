import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    window.localStorage.clear()
  })

  it('shows the site name, anchor links and a Free Consultation button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Verdict home' })).toBeInTheDocument()
    for (const label of ['About', 'Practice Areas', 'Attorneys', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Free Consultation' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('verdict-dark')).toBe('1')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('verdict-dark')).toBe('0')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Attorneys' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu from the Free Consultation CTA', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    await user.click(within(mobileMenu).getByRole('link', { name: 'Free Consultation' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('restores the saved dark preference on first render', () => {
    window.localStorage.setItem('verdict-dark', '1')
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
