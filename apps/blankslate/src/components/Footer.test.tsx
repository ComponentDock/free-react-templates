import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, navigation links and contact info', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /BlankSlate/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Useful Links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Quick Links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()

    for (const link of ['Home', 'About', 'Work', 'Pricing']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of ['Blog', 'Contact', 'Careers', 'FAQ']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('includes the Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Business Ave/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/)).toBeInTheDocument()
    expect(screen.getByText(/info@blankslate.com/)).toBeInTheDocument()
  })

  it('has a contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
