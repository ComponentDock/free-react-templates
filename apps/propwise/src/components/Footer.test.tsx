import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Prop')).toBeInTheDocument()
    expect(screen.getByText('wise')).toBeInTheDocument()
  })

  it('renders contact info section', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/200, A-block, Green Road, USA/)).toBeInTheDocument()
    expect(screen.getByText('+1 2312-3-1209')).toBeInTheDocument()
    expect(screen.getByText('info@propwise.com')).toBeInTheDocument()
  })

  it('renders quick links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    // Links appear in quick links + bottom bar, use getAllByRole
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders property types section', () => {
    render(<Footer />)
    expect(screen.getByText('Property Types')).toBeInTheDocument()
    expect(screen.getByText('Apartments')).toBeInTheDocument()
    expect(screen.getByText('Condos')).toBeInTheDocument()
    expect(screen.getByText('Townhouses')).toBeInTheDocument()
    // "Houses" appears in bottom nav too
    const housesLinks = screen.getAllByText('Houses')
    expect(housesLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
