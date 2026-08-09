import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the brand, links, CTA and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Aegis home' })).toBeInTheDocument()
    expect(screen.getByText('Aegis')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Solutions' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Protected' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)
    const mobileLinks = screen.getAllByRole('link', { name: 'Solutions' })
    expect(mobileLinks).toHaveLength(2)
    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Solutions' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link or the mobile CTA is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    // Desktop + mobile duplicates: the mobile ones render last.
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' })[1]!
    await user.click(mobileContact)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Solutions' })).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const mobileCta = screen.getAllByRole('link', { name: 'Get Protected' })[1]!
    await user.click(mobileCta)
    expect(screen.getAllByRole('link', { name: 'Get Protected' })).toHaveLength(1)
  })

  it('toggles dark mode and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('aegis-theme')).toBe('dark')
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('aegis-theme')).toBe('light')
  })

  it('restores the persisted dark preference on mount', () => {
    window.localStorage.setItem('aegis-theme', 'dark')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
