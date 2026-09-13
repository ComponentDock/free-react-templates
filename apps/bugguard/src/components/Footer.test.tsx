import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and description', () => {
    render(<Footer />)
    expect(screen.getAllByText(/BugGuard/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Professional pest control services/)).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Affiliate Program')).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('Cockroach Control')).toBeInTheDocument()
    expect(screen.getByText('Ant Treatment')).toBeInTheDocument()
    expect(screen.getByText('Rodent Removal')).toBeInTheDocument()
    expect(screen.getByText('Termite Inspection')).toBeInTheDocument()
    expect(screen.getByText('Spider Control')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/450 Strand, Charing Cross/)).toBeInTheDocument()
    expect(screen.getAllByText(/\(\+800\) 1234 56781/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/info@bugguard.com/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders newsletter form and subscribes', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Email for newsletter/)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
  })

  it('does not subscribe with empty email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByLabelText(/Email for newsletter/)).toBeInTheDocument()
  })
})
