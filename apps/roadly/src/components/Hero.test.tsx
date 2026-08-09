import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, steps teaser, and play button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Now It's easy for you rent a car/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Easy steps for renting a car/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play intro video/i })).toBeInTheDocument()
  })

  it('renders the booking form with all fields and the search CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Make your trip/i })).toBeInTheDocument()
    for (const label of [
      'Pick-up location',
      'Drop-off location',
      'Pick-up date',
      'Drop-off date',
      'Pick-up time',
    ]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Search Vehicle/i })).toBeInTheDocument()
  })

  it('submits the booking form without navigating', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByLabelText('Pick-up location'), 'Manila')
    await user.click(screen.getByRole('button', { name: /Search Vehicle/i }))
    expect(screen.getByLabelText('Pick-up location')).toHaveValue('Manila')
  })
})
