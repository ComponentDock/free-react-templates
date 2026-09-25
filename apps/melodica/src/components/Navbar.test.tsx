import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Melodica')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tracks/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /events/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the Get Tickets CTA button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /get tickets/i })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(1)

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const aboutLinks = screen.getAllByRole('link', { name: /^about$/i })
    await user.click(aboutLinks[aboutLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Get Tickets is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const ticketLinks = screen.getAllByRole('link', { name: /get tickets/i })
    await user.click(ticketLinks[ticketLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
