import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, link columns, and bottom bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Airwave home' })).toBeInTheDocument()
    expect(
      screen.getByText(/real stories from founders, creators, and innovators/i),
    ).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: 'Podcast' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Follow' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'More' })).toBeInTheDocument()
    expect(screen.getByText('Guests')).toBeInTheDocument()
    expect(screen.getByText('Clips')).toBeInTheDocument()
    expect(screen.getByText('RSS Feed')).toBeInTheDocument()
    expect(screen.getByText('Sponsor')).toBeInTheDocument()
    expect(screen.getByText('Merch')).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Airwave/i)).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Style Guide')).toBeInTheDocument()
  })
})
