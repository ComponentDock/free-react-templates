import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading text', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /We serve Fresh Vegetables & Fruits/ }),
    ).toBeInTheDocument()
  })

  it('renders the View Details CTA button', () => {
    render(<Hero />)
    expect(screen.getAllByRole('link', { name: 'View Details' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders at least 2 slides', () => {
    render(<Hero />)
    const slides = screen.getAllByRole('img')
    expect(slides.length).toBeGreaterThanOrEqual(2)
  })
})
