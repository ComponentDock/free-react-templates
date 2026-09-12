import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Achievements } from './Achievements'

describe('Achievements', () => {
  it('renders the achievements heading and all 6 achievement items', () => {
    render(<Achievements />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Achievements' })).toBeInTheDocument()

    expect(screen.getByText('Portfolio Pieces')).toBeInTheDocument()
    expect(screen.getByText('Design Shots')).toBeInTheDocument()
    expect(screen.getByText('Video Subscribers')).toBeInTheDocument()
    expect(screen.getByText('Code Commits')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
    expect(screen.getByText('Revenue Generated')).toBeInTheDocument()

    expect(screen.getByText('250+')).toBeInTheDocument()
    expect(screen.getByText('180+')).toBeInTheDocument()
    expect(screen.getByText('12K+')).toBeInTheDocument()
  })

  it('renders the View More link', () => {
    render(<Achievements />)
    expect(screen.getByRole('link', { name: /View More/i })).toBeInTheDocument()
  })
})
