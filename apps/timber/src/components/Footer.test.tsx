import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element with semantic role', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })

  it('renders the Timber brand', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Timber/i })).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    const links = ['Home', 'Projects', 'About', 'Services', 'Blog', 'Contact']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Design Street/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 234 567 890/)).toBeInTheDocument()
    expect(screen.getByText(/info@timberstudio.com/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('has a dark background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-dark')
  })
})
