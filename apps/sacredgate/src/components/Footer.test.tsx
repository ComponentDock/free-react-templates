import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo, Quick Links, Support, contact info, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Church/i })).toHaveAttribute('href', '#home')
    for (const link of ['Home', 'Ministries', 'Sermons', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const link of ['Donate', 'Volunteer', 'Events', 'Prayer Request']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByText(/123 Faith Street/)).toBeInTheDocument()
    expect(screen.getByText(/555.*234-5678/)).toBeInTheDocument()
    expect(screen.getByText(/info@sacredgate\.church/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders social media links', () => {
    render(<Footer />)
    for (const social of ['Facebook', 'Twitter', 'Instagram']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })
})
