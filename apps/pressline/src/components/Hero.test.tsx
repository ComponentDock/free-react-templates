import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtitle, and CTA buttons', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Good books don't give up all their secrets at once/),
    ).toBeInTheDocument()
    expect(screen.getByText(/curated collection of stories/)).toBeInTheDocument()
    expect(screen.getByText('View All Books')).toBeInTheDocument()
    expect(screen.getByText('Explore Now')).toBeInTheDocument()
  })

  it('has correct CTA link targets', () => {
    render(<Hero />)
    expect(screen.getByText('View All Books').closest('a')).toHaveAttribute('href', '#books')
    expect(screen.getByText('Explore Now').closest('a')).toHaveAttribute('href', '#categories')
  })
})
