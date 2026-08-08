import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the wordmark, section links, CTA and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /keyhaven home/i })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of ['Properties', 'Agents', 'About', 'Contact']) {
      expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'List Your Property' })).toBeInTheDocument()
    expect(within(nav).getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('reveals the mobile menu with the same links and CTA', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = document.getElementById('mobile-menu')!
    expect(within(menu).getByRole('link', { name: 'Agents' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'List Your Property' })).toHaveLength(2)

    await user.click(within(menu).getByRole('link', { name: 'Agents' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    await user.click(screen.getAllByRole('link', { name: 'List Your Property' })[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('persists the dark preference to localStorage', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(window.localStorage.getItem('keyhaven-dark')).toBe('1')
  })

  it('restores a persisted dark preference on mount', () => {
    window.localStorage.setItem('keyhaven-dark', '1')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
