import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO, RATING } from '../content'

describe('Hero', () => {
  it('renders one h1 with the second sentence in the brand colour', () => {
    render(<Hero />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    const h1 = headings[0]!
    expect(h1).toHaveAccessibleName(
      'Selling a house with a septic system? The clock has already started.',
    )
    expect(h1).toHaveClass('text-4xl', 'sm:text-5xl', 'lg:text-6xl', 'leading-[1.1]')
    expect(screen.getByText(HERO.headlineAccent)).toHaveClass('text-primary-600')
    expect(screen.getByText(HERO.eyebrow)).toHaveClass('text-primary-700')
  })

  it('lists the four checks and the rating line', () => {
    render(<Hero />)

    for (const item of HERO.checklist) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(screen.getByText(RATING)).toHaveClass('font-bold')
    expect(screen.getByText(HERO.ratingNote)).toBeInTheDocument()
    expect(screen.getByText(HERO.lede)).toHaveClass('text-lg', 'text-ink-500')
  })

  it('carries the quote card in the right-hand column', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: 'Book an inspection' })).toBeInTheDocument()
    expect(document.getElementById('quote')).not.toBeNull()
  })
})
