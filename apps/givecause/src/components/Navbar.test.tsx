import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('GiveCause')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Donate')).toBeInTheDocument()
  })

  it('renders contact info in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 (234) 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@givecause.org')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile links visible
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByText('Home')
    // Click the mobile version (second occurrence)
    await user.click(mobileLinks[1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Donate is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const donateLinks = screen.getAllByText('Donate')
    // Click the mobile Donate link (last occurrence)
    await user.click(donateLinks[donateLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
