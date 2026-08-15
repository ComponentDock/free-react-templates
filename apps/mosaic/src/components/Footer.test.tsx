import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders three widget columns with brand, links and contact details', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Mosaic.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Information' })).toBeInTheDocument()

    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1 235 2355 98' })).toHaveAttribute(
      'href',
      'tel:+1235235598',
    )
    expect(screen.getByRole('link', { name: 'info@yoursite.com' })).toHaveAttribute(
      'href',
      'mailto:info@yoursite.com',
    )
  })

  it('renders the three social circles', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the credit row', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
