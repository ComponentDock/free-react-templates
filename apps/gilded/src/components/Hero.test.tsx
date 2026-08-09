import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the eyebrow, headline, and the Book An Appointment CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/we care about your hair/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /beautiful hair comes from a legendary/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Hair Salon')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book an appointment/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
