import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /New Styles, Suited for You/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Fresh fashion, curated every season/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('renders the portrait image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Aurora featured look' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
