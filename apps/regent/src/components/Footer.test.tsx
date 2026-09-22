import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER } from '../data'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders the about heading', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.about.heading)).toBeInTheDocument()
  })

  it('renders the about text', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.about.text)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: FOOTER.about.readMoreLabel })).toBeInTheDocument()
  })

  it('renders all quick links', () => {
    render(<Footer />)
    for (const link of FOOTER.quickLinks) {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    }
  })

  it('renders contact info', () => {
    render(<Footer />)
    for (const line of FOOTER.contact.lines) {
      expect(screen.getByText(line)).toBeInTheDocument()
    }
  })

  it('renders the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.copyright)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: FOOTER.dockLink.label })
    expect(link).toHaveAttribute('href', FOOTER.dockLink.href)
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has dark background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-dark')
  })
})
