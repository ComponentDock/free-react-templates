import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading, subtitle, and call-to-action button', () => {
    render(<CTA />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Add your property for sale' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Reach thousands of potential buyers/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'List Your Property' })).toBeInTheDocument()
  })
})
