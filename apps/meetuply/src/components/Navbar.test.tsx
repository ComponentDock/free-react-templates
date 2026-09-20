import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Meetup')).toBeInTheDocument()
    expect(screen.getByText('ly')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Speakers', 'Schedule', 'Blog', 'Contact']) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Buy Ticket CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /buy ticket/i })).toBeInTheDocument()
  })

  it('has dark background', () => {
    const { container } = render(<Navbar />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('bg-charcoal/90')
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
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // Click the mobile "About" link (the second one, in the mobile menu)
    const aboutLinks = screen.getAllByText('About')
    const mobileAbout = aboutLinks[aboutLinks.length - 1]
    if (mobileAbout) await user.click(mobileAbout)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Buy Ticket is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const buyLinks = screen.getAllByRole('link', { name: /buy ticket/i })
    const lastBuyLink = buyLinks[buyLinks.length - 1]
    if (lastBuyLink) await user.click(lastBuyLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
