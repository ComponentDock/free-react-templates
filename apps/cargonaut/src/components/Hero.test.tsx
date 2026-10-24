import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero headline, kicker and services call to action', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /global logistic service for business/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/for personal & business/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /our services/i })).toHaveAttribute('href', '#services')
  })

  it('renders the photographic backdrop with descriptive alternative text', () => {
    render(<Hero />)
    expect(screen.getByAltText(/freight containers moving through a port/i)).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/cargonaut-hero/1600/900',
    )
  })
})
