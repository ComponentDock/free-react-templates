import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the restaurant name', () => {
    render(<Navbar />)
    expect(screen.getByText('Polenta')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Menu', 'Reservation', 'Gallery', 'Events', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('renders the Reserve button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Reserve' })).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('045-548-14-97')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<Navbar />)
    expect(screen.getByText('3685 Granville Lane')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('has accessible mobile menu toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const { within } = await import('@testing-library/react')
    const user = userEvent.setup()
    render(<Navbar />)
    // Open the menu
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    // Click a link in the mobile nav
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const aboutLink = within(mobileNav).getByRole('link', { name: 'About' })
    await user.click(aboutLink)
    // Menu should close
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
