import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Groove')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Albums' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Tours' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders a Buy tickets CTA on desktop', () => {
    render(<Navbar />)

    const ctaLinks = screen.getAllByRole('link', { name: 'Buy tickets' })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    // The mobile menu has its own set of links; get the second "About" link
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    const mobileAboutLink = aboutLinks.at(-1)
    expect(mobileAboutLink).toBeDefined()
    await user.click(mobileAboutLink!)

    // After clicking, the mobile menu should close (toggle shows "Open menu" again)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
