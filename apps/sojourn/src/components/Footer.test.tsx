import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site logo, the copyright line, and the social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Sojourn' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByRole('link', { name: 'Visit Instagram profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Facebook profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Twitter profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Pinterest profile' })).toBeInTheDocument()
  })

  it('includes the current year in the copyright line', () => {
    render(<Footer />)
    const year = String(new Date().getFullYear())
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
  })
})
