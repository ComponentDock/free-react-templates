import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, supporting copy, CTA button, and dashboard image', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Stay connected together in your own business network',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Personalized experiences are proven to increase conversions/),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Get Started Now' })).toHaveAttribute(
      'href',
      '#features',
    )
  })
})
