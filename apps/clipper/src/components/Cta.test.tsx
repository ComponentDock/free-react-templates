import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the discount message and the appointment button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { name: 'Appoint a Haircut Today and Get 25% discount' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Make an Appointment' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
