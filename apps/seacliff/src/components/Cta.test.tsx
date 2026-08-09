import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the headline, blurb, and both action buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { name: 'Make Your Stay Extraordinary' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Reserve your escape at Seacliff/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Your Stay' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Offers' })).toBeInTheDocument()
  })
})
