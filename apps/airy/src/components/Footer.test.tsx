import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand, links, contact info, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText('Airy')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Useful links
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()

    // Quick links
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()

    // Contact
    expect(screen.getByText('Have a Question?')).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()

    // Component Dock
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
