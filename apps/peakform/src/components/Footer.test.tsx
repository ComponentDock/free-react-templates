import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('displays about section', () => {
    render(<Footer />)
    expect(screen.getByText(/about peakform/i)).toBeInTheDocument()
  })

  it('displays quick menu links', () => {
    render(<Footer />)
    expect(screen.getByText(/quick menu/i)).toBeInTheDocument()
  })

  it('displays contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/contact info/i)).toBeInTheDocument()
    expect(screen.getByText(/info@peakform\.com/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays social icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThan(0)
  })
})
