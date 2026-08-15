import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, and link columns', () => {
    render(<Footer />)

    expect(screen.getByText('Mintly')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Clinic' })).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the current year', () => {
    render(<Footer />)

    expect(
      screen.getByText(`© ${new Date().getFullYear()} Mintly. All rights reserved.`),
    ).toBeInTheDocument()
  })
})
