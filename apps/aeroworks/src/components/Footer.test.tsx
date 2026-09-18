import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the contact heading', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us Now!')).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<Footer />)
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(screen.getByText('info@aeroworks.com')).toBeInTheDocument()
    expect(screen.getByText(/123 Car Street/)).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText(/trusted partner for car rentals/)).toBeInTheDocument()
  })

  it('renders Information links', () => {
    render(<Footer />)
    for (const link of ['Purchase', 'Payment', 'Shipping', 'Return']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the Top Brands section', () => {
    render(<Footer />)
    expect(screen.getByText('Top Brands')).toBeInTheDocument()
    for (const brand of ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Ford', 'Audi']) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })

  it('renders copyright and Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
