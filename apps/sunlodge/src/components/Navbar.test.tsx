import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Book Now CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('renders the Sunlodge logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Sunlodge')).toBeInTheDocument()
  })

  it('renders contact info on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 (75) 657 5378')).toBeInTheDocument()
    expect(screen.getByText('66/A, Green Lane, NYC')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const bookNowLinks = screen.getAllByText('Book Now')
    const mobileBookNow = bookNowLinks[1]!
    await user.click(mobileBookNow)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
