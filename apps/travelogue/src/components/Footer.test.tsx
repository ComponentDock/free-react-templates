import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, navigation links, Component Dock link, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Travelogue' })).toBeInTheDocument()

    for (const label of ['Home', 'Destinations', 'Trips', 'Testimonials']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText('Made with')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Travelogue`)),
    ).toBeInTheDocument()
  })
})
