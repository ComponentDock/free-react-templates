import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the statement strip with phone and the divider', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toHaveAttribute('id', 'contact')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We Understand The Importance of Every Delivery!',
    )
    expect(screen.getByText('+1 555-010-0142')).toBeInTheDocument()
  })

  it('renders the four columns with links', () => {
    render(<Footer />)
    for (const title of ['COMPANY', 'Open hour', 'RESOURCES']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Vitesse').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/live tracking, handled by one team/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Track a Shipment' })).toHaveAttribute('href', '#top')
    expect(screen.getByRole('link', { name: 'Online tracking 24/7' })).toHaveAttribute(
      'href',
      '#quote',
    )
  })

  it('links Component Dock in the copyright bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright © 2026 All rights reserved/)).toBeInTheDocument()
  })

  it('renders aria-labeled social links', () => {
    render(<Footer />)
    for (const label of ['Twitter', 'Facebook', 'LinkedIn', 'Website']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
