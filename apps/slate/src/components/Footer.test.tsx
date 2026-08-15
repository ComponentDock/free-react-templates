import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, and link columns', () => {
    render(<Footer />)
    expect(screen.getByText('Slate')).toBeInTheDocument()
    expect(screen.getByText(/Modern business websites/)).toBeInTheDocument()
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Features' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Testimonials' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the copyright bar with the Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Slate. All rights reserved.`)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
