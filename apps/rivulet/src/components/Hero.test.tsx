import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { heroQuote, heroTitle, scrollLabel } from '../data'

describe('Hero', () => {
  it('renders the uppercase headline and the quote sub-line', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: heroTitle })).toBeInTheDocument()
    expect(screen.getByText(heroQuote)).toBeInTheDocument()
  })

  it('renders the navy background and the particle overlay', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('region', { name: 'Hero' })).toHaveClass('bg-navy')
    const particles = container.querySelectorAll('[class*="animate-particle-drift"]')
    expect(particles.length).toBeGreaterThan(0)
  })

  it('renders a scroll indicator at the bottom', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: scrollLabel })).toBeInTheDocument()
  })
})
