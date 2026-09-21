import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the logo with green pilot text', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Loan/i })).toBeInTheDocument()
    expect(screen.getByText('pilot')).toHaveClass('text-primary')
  })

  it('renders the Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Follow Us section with social icons', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St./i)).toBeInTheDocument()
  })

  it('renders the copyright with year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(
      screen.getByText(/committed to providing the best financial solutions/i),
    ).toBeInTheDocument()
  })
})
