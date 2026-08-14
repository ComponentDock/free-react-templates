import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name and an about paragraph in muted white', () => {
    render(<Footer />)
    expect(screen.getByText('Obscura')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum/)).toHaveClass('text-white/25')
  })

  it('shows the Discover column with navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Discover' })).toBeInTheDocument()
    for (const label of ['About the Artist', 'Portfolio', 'News', 'Contact']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', expect.stringContaining('#'))
      expect(link).toHaveClass('text-white/25')
    }
  })

  it('shows the Talk to us column with a phone number and two email addresses', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Talk to us' })).toBeInTheDocument()
    expect(screen.getByText('+34 5667 4332 244')).toBeInTheDocument()
    expect(screen.getByText('Contact@sportify25.com')).toBeInTheDocument()
    expect(screen.getByText('office@sportify25.com')).toBeInTheDocument()
  })

  it('shows the Location column with address lines', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Location' })).toBeInTheDocument()
    expect(screen.getByText('MAin str. 25')).toBeInTheDocument()
    expect(screen.getByText('458811 CA.')).toBeInTheDocument()
  })

  it('shows a copyright bar and links to Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Obscura. All rights reserved.')).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
