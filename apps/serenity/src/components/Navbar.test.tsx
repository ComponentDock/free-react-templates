import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, nav links and a dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Serenity home' })).toBeInTheDocument()
    for (const label of [
      'Home',
      'About',
      'Treatments',
      'Specialists',
      'Pricing',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles the .dark class on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('serenity-theme')).toBe('dark')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('serenity-theme')).toBe('light')
  })

  it('restores a persisted dark preference on mount', () => {
    window.localStorage.setItem('serenity-theme', 'dark')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('expands the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    const pricingLinks = screen.getAllByRole('link', { name: 'Pricing' })
    await user.click(pricingLinks[pricingLinks.length - 1]!)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
