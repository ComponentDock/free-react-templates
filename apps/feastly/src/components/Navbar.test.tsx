import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and all navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Feastly')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Specials' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

    // Click a mobile nav link to close the menu
    const mobileLinks = screen.getAllByRole('link')
    const aboutLink = mobileLinks.find(
      (link) => link.getAttribute('href') === '#about' && link.className.includes('block'),
    )
    expect(aboutLink).toBeDefined()
    await user.click(aboutLink!)

    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('has correct anchor links for each nav item', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Menu' })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: 'Specials' })).toHaveAttribute('href', '#specials')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
