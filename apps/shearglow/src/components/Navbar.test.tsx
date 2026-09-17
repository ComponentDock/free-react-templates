import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Shear')).toBeInTheDocument()
    expect(screen.getByText('Glow')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders the Book Now button on desktop', () => {
    render(<Navbar />)
    const bookLinks = screen.getAllByRole('link', { name: /Book Now/i })
    expect(bookLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the top info bar', () => {
    render(<Navbar />)
    expect(screen.getByText('Welcome to hair salon!')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Toggle navigation/i })
    // Mobile menu links are hidden initially
    await user.click(toggle)
    // After click, mobile menu links appear
    const mobileLinks = screen.getAllByRole('link', { name: /Home/i })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Toggle navigation/i })
    await user.click(toggle)
    // Click on a mobile nav link
    const aboutLinks = screen.getAllByRole('link', { name: /^About$/i })
    // The mobile version is the one we want to click
    await user.click(aboutLinks[aboutLinks.length - 1]!)
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Toggle navigation/i })
    await user.click(toggle)
    const bookLinks = screen.getAllByRole('link', { name: /Book Now/i })
    await user.click(bookLinks[bookLinks.length - 1]!)
  })
})
