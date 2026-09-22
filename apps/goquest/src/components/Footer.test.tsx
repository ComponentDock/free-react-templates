import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /goquest/i })).toHaveAttribute('href', '#home')
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(/world-leading online tour booking platform/i)).toBeInTheDocument()
  })

  it('renders the Quick Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders the New Products column', () => {
    render(<Footer />)
    expect(screen.getByText('New Products')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Greek Islands Tour' })).toBeInTheDocument()
  })

  it('renders the Support column', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
  })

  it('renders the copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('info@goquest.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (234) 567 890')).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')!
    expect(footer.style.backgroundImage).toContain('goquest-footer')
  })
})
