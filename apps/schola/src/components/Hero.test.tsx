import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a level-1 heading with the headline', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Forge Your Future with Expert-Led Courses/)
  })

  it('shows the badge, blurb, and both CTAs', () => {
    render(<Hero />)
    expect(screen.getByText(/New: AI & Machine Learning Track/)).toBeInTheDocument()
    expect(screen.getByText(/Master in-demand skills/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Browse Courses/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Pricing/ })).toBeInTheDocument()
  })

  it('shows the stats strip', () => {
    render(<Hero />)
    expect(screen.getByText('100K+')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
  })
})
