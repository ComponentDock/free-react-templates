import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders the site name', () => {
    render(<Footer />)
    expect(screen.getByText('Kinectwell')).toBeInTheDocument()
  })

  it('renders the about blurb', () => {
    render(<Footer />)
    expect(screen.getByText(/professional physical therapy/)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getByText('Physical Therapy')).toBeInTheDocument()
    expect(screen.getByText('Chiropractic')).toBeInTheDocument()
    expect(screen.getByText('Massage Therapy')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Kinectwell/)).toBeInTheDocument()
  })

  it('renders Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has contact section id', () => {
    render(<Footer />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })
})
