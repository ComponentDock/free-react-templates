import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('ForgePoint').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Industries/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders the top info bar with phone, email, and hours', () => {
    render(<Navbar />)
    expect(screen.getByText(/\+880166 253 232/)).toBeInTheDocument()
    expect(screen.getByText(/info@forgepoint\.com/)).toBeInTheDocument()
    expect(screen.getByText(/Mon - Fri: 9:00 - 19:00/)).toBeInTheDocument()
  })

  it('renders the Get A Quote CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Get A Quote/i })).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()
  })
})
