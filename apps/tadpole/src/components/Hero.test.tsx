import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Where Little Minds Grow Big Dreams')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Nurturing curiosity and creativity/)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Explore Programs')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
