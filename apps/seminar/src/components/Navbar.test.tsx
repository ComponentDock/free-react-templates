import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Seminar')).toBeInTheDocument()
  })

  it('renders navigation links (desktop + mobile)', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBe(2)
    expect(homeLinks[0]).toHaveAttribute('href', '#home')
  })

  it('renders the Buy Tickets CTA', () => {
    render(<Navbar />)
    const tickets = screen.getAllByRole('link', { name: 'Buy Tickets' })
    expect(tickets.length).toBe(2)
    expect(tickets[0]).toHaveAttribute('href', '#tickets')
  })

  it('has correct navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const lastLink = homeLinks[homeLinks.length - 1]
    if (lastLink) await user.click(lastLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
