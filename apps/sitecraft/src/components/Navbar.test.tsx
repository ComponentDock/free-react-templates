import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Sitecraft logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Sitecraft')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#team')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Mobile links visible
    const mobileHomeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileHomeLinks.length).toBeGreaterThanOrEqual(2)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    // Click a mobile link (the one inside the mobile menu)
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileLinks[mobileLinks.length - 1]!)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
