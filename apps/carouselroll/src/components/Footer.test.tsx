import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, tagline, and copyright with Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText('CarouselRoll')).toBeInTheDocument()
    expect(screen.getByText(/Explore stunning travel destinations/i)).toBeInTheDocument()

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${currentYear} CarouselRoll`))).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
