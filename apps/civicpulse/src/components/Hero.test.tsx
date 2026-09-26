import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Support Our Party/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Get Started/i)).toHaveAttribute('href', '#about')
  })

  it('renders hero image', () => {
    render(<Hero />)
    expect(screen.getByAltText(/Political rally/)).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Don't look further/)).toBeInTheDocument()
  })
})
