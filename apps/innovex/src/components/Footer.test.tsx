import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand and section headings', () => {
    render(<Footer />)
    expect(screen.getByText('Innovex')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    // Use heading role to disambiguate "Contact" (also appears as a nav link)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders company and service links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 Street, City, Country')).toBeInTheDocument()
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('email@example.com')).toBeInTheDocument()
  })

  it('renders newsletter email input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const dockLink = screen.getByText('Component Dock')
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
