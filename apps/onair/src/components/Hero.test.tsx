import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Designed For Music, Engineered to Last/ }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/31st Dec/)).toBeInTheDocument()
  })

  it('renders the Book Now CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /book now/i })).toHaveAttribute('href', '#charts')
  })
})
