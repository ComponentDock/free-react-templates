import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Gather')).toBeInTheDocument()
    expect(screen.getByText('Venue')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Schedule', 'Speakers', 'Sponsors', 'Contact']
    for (const label of links) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('renders Buy Ticket CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /buy ticket/i })).toBeInTheDocument()
  })

  it('has dark background', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('bg-navy')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const aboutLinks = screen.getAllByText('About')
    const mobileLink = aboutLinks[1]
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Buy Ticket is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const buyLinks = screen.getAllByRole('link', { name: /buy ticket/i })
    const mobileBuyLink = buyLinks[1]
    expect(mobileBuyLink).toBeDefined()
    await user.click(mobileBuyLink!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
