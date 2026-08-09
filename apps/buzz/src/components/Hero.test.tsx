import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and Appointment CTA', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Modern barber shop in center of the city' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Excepteur sint occaecat/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Appointment' })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('shows a background photo with descriptive alt text', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: "Barber shaving a client's beard" })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
