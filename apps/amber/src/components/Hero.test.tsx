import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, tagline and opening-hour panel', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Best Barber in your Town/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Professional Care/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Opening Hour/i })).toBeInTheDocument()
    expect(screen.getByText(/Mon-Fri \(9.00-11.00\)/i)).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Barber at work/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
