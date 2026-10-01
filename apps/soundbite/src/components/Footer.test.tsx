import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand, description, and social links', () => {
    render(<Footer />)
    expect(screen.getAllByText('Soundbite').length).toBeGreaterThan(0)
    expect(screen.getByText(/Real stories from founders/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X (Twitter)' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'YouTube' }).length).toBeGreaterThan(1)
  })

  it('renders the Podcast, Follow, and More columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Podcast' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Follow' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'More' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Listen Now' })).toBeInTheDocument()
    expect(screen.getByText('Guests')).toBeInTheDocument()
    expect(screen.getByText('RSS Feed')).toBeInTheDocument()
    expect(screen.getByText('Merch')).toBeInTheDocument()
  })

  it('renders Listen Now platform buttons', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link', { name: /Spotify/ }).length).toBeGreaterThan(1)
    expect(screen.getAllByRole('link', { name: /Apple/ }).length).toBeGreaterThan(1)
  })

  it('renders the bottom bar with copyright and legal links', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Soundbite/)).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Style Guide')).toBeInTheDocument()
  })

  it('links to Component Dock in the attribution line', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
