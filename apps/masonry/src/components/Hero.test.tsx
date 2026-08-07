import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and get-started button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Precise Created Only For You/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('shows a hero image with descriptive alt text', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /architecture/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
