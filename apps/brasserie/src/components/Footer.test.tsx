import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, tagline, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Brasserie' })).toBeInTheDocument()
    expect(screen.getByText(/premium dining experience/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
