import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, links, CTA and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'ShieldGuard home' })).toBeInTheDocument()
    expect(screen.getByText('ShieldGuard')).toBeInTheDocument()
    for (const label of ['Coverage', 'Why Us', 'Process', 'Testimonials', 'FAQ', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Get a Quote' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('toggles dark mode on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('coverly-theme')).toBe('dark')
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('coverly-theme')).toBe('light')
  })

  it('restores a persisted dark preference on first render', () => {
    window.localStorage.setItem('coverly-theme', 'dark')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('opens and closes the mobile navigation drawer', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Get a Quote' }).length).toBe(2)
    await user.click(screen.getAllByRole('link', { name: 'Coverage' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Get a Quote' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
