import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, call-to-action, and phone mockup', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'The Best App in the Universe' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/great software sets higher standards/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Explore Now' })).toHaveAttribute('href', '#features')

    expect(screen.getByRole('img', { name: 'BulkApp app phone mockup' })).toBeInTheDocument()
  })
})
