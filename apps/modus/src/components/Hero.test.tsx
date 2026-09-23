import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Let's Make your Interior Better/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/all-powerful Pointing/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Our Services/i })).toBeInTheDocument()
  })

  it('renders the hero images', () => {
    render(<Hero />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(1)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
