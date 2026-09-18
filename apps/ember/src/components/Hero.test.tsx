import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and tagline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Deliciousness jumping into the mouth/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Expensive but the best/i)).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Fine dining/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the Reservation and Watch our story buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /reservation/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /watch our story/i })).toBeInTheDocument()
  })
})
