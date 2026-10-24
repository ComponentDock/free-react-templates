import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer widgets', () => {
    render(<Footer />)

    for (const title of ['About Flint.', 'Connect', 'Links', 'Company', 'Contact']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders contact details', () => {
    render(<Footer />)

    expect(screen.getByText('43 Raymouth Rd. Baltemoer, London 3910')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1(123)-456-7890' })).toHaveAttribute(
      'href',
      'tel:+11234567890',
    )
    expect(screen.getByRole('link', { name: 'info@mydomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@mydomain.com',
    )
  })

  it('renders every social chip as a labelled link', () => {
    render(<Footer />)

    for (const name of ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Pinterest', 'Dribbble']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('credits Component Dock', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
