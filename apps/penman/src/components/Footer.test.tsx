import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, it, expect } from 'vitest'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders column headings', () => {
    render(<Footer />)
    // "About" appears in both column heading and nav — use getAllByText
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Links').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Chapter', 'Reviews', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders copyright with year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
