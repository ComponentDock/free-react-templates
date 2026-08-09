import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, steps teaser, and play button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Fast & Easy Way To Rent A Car/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Easy steps for renting a car/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play intro video/i })).toBeInTheDocument()
  })
})
