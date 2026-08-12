import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext and tracking form', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Choose Your Quality Delivery of Your Cargo',
      }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Tracking number')).toHaveAttribute(
      'placeholder',
      'Enter your tracking number',
    )
    expect(screen.getByRole('button', { name: 'Track Now' })).toBeInTheDocument()
  })

  it('shows a per-field error when submitting without a tracking number', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Track Now' }))

    expect(screen.getByText('Please enter your tracking number')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    /* Typing after an error clears it. */
    fireEvent.change(screen.getByLabelText('Tracking number'), { target: { value: 'X' } })
    expect(screen.queryByText('Please enter your tracking number')).not.toBeInTheDocument()
  })

  it('confirms the entered tracking number on submit', () => {
    render(<Hero />)

    /* Typing before any error keeps the field clean. */
    const input = screen.getByLabelText('Tracking number')
    fireEvent.change(input, { target: { value: 'HAUL-2026' } })
    expect(screen.queryByText('Please enter your tracking number')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Track Now' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      "Your cargo HAUL-2026 is being tracked. We'll update you shortly.",
    )
  })
})
