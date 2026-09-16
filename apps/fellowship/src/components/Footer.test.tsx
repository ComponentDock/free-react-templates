import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders Church Quick Links', () => {
    render(<Footer />)
    expect(screen.getByText('Church Quick Links')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Sermons')).toBeInTheDocument()
  })

  it('renders Events section heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Events' })).toBeInTheDocument()
  })

  it('renders Contact Information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText(/34 Street Name/)).toBeInTheDocument()
    expect(screen.getByText('+1 242 4942 290')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
