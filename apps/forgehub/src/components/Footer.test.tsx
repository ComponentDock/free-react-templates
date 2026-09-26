import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us section', () => {
    render(<Footer />)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Features heading', () => {
    render(<Footer />)
    expect(screen.getByText('Features')).toBeInTheDocument()
  })

  it('renders Follow Us section', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders Newsletter signup', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/ForgeHub/)).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', {
      name: /facebook|twitter|instagram|linkedin/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(4)
  })

  it('renders footer nav links', () => {
    render(<Footer />)
    const links = ['Services', 'Testimonials', 'Contact Us']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const sendButton = screen.getByRole('button', { name: 'Send' })
    await user.click(sendButton)
  })
})
