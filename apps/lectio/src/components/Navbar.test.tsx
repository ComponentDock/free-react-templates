import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and logo icon', () => {
    const { container } = render(<Navbar />)
    expect(screen.getByText('Lectio')).toBeInTheDocument()
    const svg = container.querySelector('svg.lucide-book-open')
    expect(svg).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About Us', 'Courses', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders login / register link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Login / Register' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when Login/Register is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // The mobile Login/Register link (second one, after desktop)
    const loginLinks = screen.getAllByRole('link', { name: 'Login / Register' })
    await user.click(loginLinks[1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('renders the yellow accent bottom border', () => {
    const { container } = render(<Navbar />)
    const accent = container.querySelector('.bg-gold')
    expect(accent).toBeInTheDocument()
  })
})
