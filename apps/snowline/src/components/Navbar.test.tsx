import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Snowline')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders search and shopping bag buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shopping bag' })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: 'Toggle menu' })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    // Mobile nav links visible
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    // Click the first mobile nav link (Home)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks.at(-1)
    if (!mobileLink) throw new Error('Mobile link not found')
    await user.click(mobileLink)
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })
})
