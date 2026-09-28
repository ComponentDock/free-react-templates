import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and explore menu link', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Premium cuts, expertly crafted/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Menu/i })).toBeInTheDocument()
  })

  it('shows the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Premium grilled steak/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
