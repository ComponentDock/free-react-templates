import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { address, email, footerLinks, phoneDisplay } from '../data'

describe('Footer', () => {
  it('renders the brand, blurb and circular social icons', () => {
    render(<Footer />)
    expect(
      screen.getByText(
        (_content, element) =>
          element?.tagName === 'P' && element.textContent === 'Kinesis Crossfit & Fitness',
      ),
    ).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Explore column with the five links', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Explore' })).toBeInTheDocument()
    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders the contact details with runtime-built phone href', () => {
    render(<Footer />)
    expect(screen.getByText(address)).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: phoneDisplay })
    expect(phone).toHaveAttribute('href', 'tel:' + phoneDisplay.replace(/[^\d+]/g, ''))
    expect(screen.getByRole('link', { name: email })).toHaveAttribute('href', 'mailto:' + email)
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Kinesis/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
