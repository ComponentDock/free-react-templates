import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('converge')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Schedule', 'News', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders login and register links', () => {
    render(<Navbar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('renders the Get Tickets CTA', () => {
    render(<Navbar />)
    const ctas = screen.getAllByText('Get Tickets')
    expect(ctas.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const aboutLinks = screen.getAllByText('About')
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Get Tickets is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const getTicketsLinks = screen.getAllByText('Get Tickets')
    // The mobile Get Tickets link is the last one
    const mobileGetTickets = getTicketsLinks[getTicketsLinks.length - 1]!
    await user.click(mobileGetTickets)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
