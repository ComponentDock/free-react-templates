import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, description, and CTA button', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: /bless others with your gift/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/heaven fruitful lesser days/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Donation' })).toBeInTheDocument()
  })

  it('links the CTA to the causes section', () => {
    render(<Hero />)

    const cta = screen.getByRole('link', { name: 'Start Donation' })
    expect(cta).toHaveAttribute('href', '#causes')
  })
})
