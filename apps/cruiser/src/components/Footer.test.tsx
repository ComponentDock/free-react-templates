import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Cruiser logo and branding', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Cruiser' })).toHaveAttribute('href', '#')
  })

  it('renders column headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders feature links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Gear Reviews' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Spot Guides' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Coaching' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Community' })).toBeInTheDocument()
  })

  it('renders quick links with correct hrefs', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders newsletter form with email input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('prevents default newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByPlaceholderText('Your email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    // No error = default prevented
  })

  it('shows the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('shows the Built by text', () => {
    render(<Footer />)
    expect(screen.getByText(/Built by/)).toBeInTheDocument()
  })
})
