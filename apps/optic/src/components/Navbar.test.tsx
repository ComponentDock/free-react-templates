import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Optic')).toBeInTheDocument()
  })

  it('renders left nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
  })

  it('renders right nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('toggles mobile menu open and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    // Open mobile menu
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile link (the first Home in the mobile menu) to close it
    const mobileLinks = screen.getAllByText('Home')
    // The last one is the mobile menu link
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
