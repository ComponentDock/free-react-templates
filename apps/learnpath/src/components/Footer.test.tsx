import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and copyright', () => {
    render(<Footer />)

    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Path')).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Contact Us section with details', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('info@learnpath.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText(/123 Learning Street/)).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()

    for (const link of ['Home', 'About', 'Courses', 'Blog', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders Follow Us section with social links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('href', '#facebook')
    expect(screen.getByLabelText('Twitter')).toHaveAttribute('href', '#twitter')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', '#instagram')
    expect(screen.getByLabelText('Youtube')).toHaveAttribute('href', '#youtube')
  })

  it('links to componentdock.com with correct attributes', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not reference colorlib', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.innerHTML.toLowerCase()).not.toContain('colorlib')
  })
})
