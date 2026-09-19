import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about section', () => {
    render(<Footer />)
    expect(screen.getByText('About KeyForge')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('Locksmith')).toBeInTheDocument()
    expect(screen.getByText('Safes & Locks')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('+1 123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@keyforge.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('has a back to top link', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Back to top')).toBeInTheDocument()
  })
})
