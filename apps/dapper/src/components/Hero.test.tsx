import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and call to action', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'HairStyle is a Must Try Fashion' }),
    ).toBeInTheDocument()
    expect(screen.getByText('For All Occasion')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch Intro Video' })).toHaveAttribute(
      'href',
      '#about',
    )
  })

  it('shows a background photo with descriptive alt text', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: "Barber trimming a client's hair" })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
