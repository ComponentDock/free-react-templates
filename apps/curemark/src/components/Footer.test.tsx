import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Curemark logo text', () => {
    render(<Footer />)
    expect(screen.getByText('Curemark')).toBeInTheDocument()
  })

  it('renders the about description', () => {
    render(<Footer />)
    expect(
      screen.getByText(/dedicated to providing high-quality medical services/i),
    ).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year}.*Curemark`))).toBeInTheDocument()
    const cdLinks = screen.getAllByRole('link', { name: /component dock/i })
    expect(cdLinks.some((l) => l.getAttribute('href') === 'https://www.componentdock.com/')).toBe(
      true,
    )
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Medical Center Drive/)).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@curemark.com')).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Departments', 'Contact', 'FAQ', 'Testimonials']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the bottom bar with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
    const bottomLinks = screen.getAllByRole('link', { name: /component dock/i })
    expect(bottomLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has proper contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders heading elements for each column', () => {
    render(<Footer />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
    expect(headings[0]).toHaveTextContent('Curemark')
    expect(headings[1]).toHaveTextContent('Contact')
    expect(headings[2]).toHaveTextContent('Useful Links')
  })
})
