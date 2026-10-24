import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading and a call-to-action button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Pamper Your Pet?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book an Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
