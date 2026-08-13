import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the four feature cards with their links', () => {
    render(<Features />)

    for (const title of [
      'Shipment Tracking',
      'Have a Question?',
      'Get a Quote',
      'Shipping Calculator',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Find your cargo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start a quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Estimate' })).toBeInTheDocument()
  })

  it('renders the About title block with the CTA button', () => {
    render(<Features />)

    expect(screen.getByText('About Our Company')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: "We're Carefully Delivering your happiness.",
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More About Us' })).toHaveAttribute(
      'href',
      '#about',
    )
  })
})
