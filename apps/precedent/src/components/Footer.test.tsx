import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText('Precedent').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the description', () => {
    render(<Footer />)
    expect(screen.getByText(/Providing exceptional legal services/)).toBeInTheDocument()
  })

  it('renders practice areas links', () => {
    render(<Footer />)
    expect(screen.getAllByText('Business Law').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Family Law').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Criminal Law').length).toBeGreaterThanOrEqual(1)
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    // Practice Areas appears in both navs, use getAllByText
    expect(screen.getAllByText('Practice Areas').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Attorneys')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Legal Street, Suite 100, New York, NY 10001')).toBeInTheDocument()
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('youremail@email.com')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('has aria-label on nav elements', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Practice areas' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Quick links' })).toBeInTheDocument()
  })

  it('has copyright with year', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 All rights reserved/)).toBeInTheDocument()
  })
})
