import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name, Home link, and nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Clipper/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Haircut' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openButton = screen.getByRole('button', { name: 'Open menu' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    await user.click(openButton)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Haircut' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
