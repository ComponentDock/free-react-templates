import { render, screen } from '@testing-library/react'
import { ParallaxCTA } from './ParallaxCTA'
import { describe, it, expect } from 'vitest'

describe('ParallaxCTA', () => {
  it('renders heading and CTA', () => {
    render(<ParallaxCTA />)
    expect(screen.getByText(/make your space shine/)).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ParallaxCTA />)
    expect(screen.getByText(/professional cleaning service/)).toBeInTheDocument()
  })
})
