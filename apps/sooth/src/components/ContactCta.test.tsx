import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactCta } from './ContactCta'

describe('ContactCta', () => {
  it('renders the headline and both call-to-action buttons', () => {
    render(<ContactCta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Give the Gift of Relaxation' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Purchase Gift Card' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Visit' })).toBeInTheDocument()
  })
})
