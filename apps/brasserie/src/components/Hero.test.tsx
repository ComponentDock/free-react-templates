import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: 'Brasserie' })).toBeInTheDocument()
    expect(screen.getByText('Premium Restaurant')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Reservation' })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })
})
