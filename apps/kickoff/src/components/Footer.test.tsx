import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, contact widget, links, and Component Dock attribution', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Kickoff' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toHaveAttribute(
      'href',
      'tel:+23923929210',
    )
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )

    for (const social of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(screen.getAllByRole('heading', { name: 'Links' })).toHaveLength(1)
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
