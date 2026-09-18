import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Crafting Best Experience/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Art and Crafting \/ Acting and Philosophy/i)).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Art and crafting workspace/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
