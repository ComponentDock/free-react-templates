import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and blurb', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Modern Innovative Architecture' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/From as low as \$20/)).toBeInTheDocument()
  })

  it('shows the two action buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Explore Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch our video' })).toBeInTheDocument()
  })
})
