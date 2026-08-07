import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and CTA', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'We Design Your Space' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/From the first sketch to the final finish/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See Our Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
  })
})
