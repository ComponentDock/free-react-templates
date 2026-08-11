import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedRecipes } from './FeaturedRecipes'
import { featuredLarge, featuredSmalls, featuredRecipesTitle } from '../data'

describe('FeaturedRecipes', () => {
  it('renders the pink section-title box with the white heading', () => {
    render(<FeaturedRecipes />)
    const heading = screen.getByRole('heading', { level: 5, name: featuredRecipesTitle })
    expect(heading).toBeInTheDocument()
    const box = heading.closest('[data-section-title-box]')
    expect(box).toHaveClass('bg-brand')
    expect(box).toHaveClass('absolute')
  })

  it('renders a large featured card and additional distinct small cards', () => {
    const { container } = render(<FeaturedRecipes />)
    expect(screen.getByRole('heading', { level: 4, name: featuredLarge.title })).toBeInTheDocument()
    expect(screen.getByText(featuredLarge.excerpt)).toBeInTheDocument()

    for (const card of featuredSmalls) {
      expect(screen.getByRole('heading', { level: 4, name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.excerpt)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(4)
  })

  it('uses distinct titles for the small cards', () => {
    const titles = featuredSmalls.map((c) => c.title)
    expect(new Set(titles).size).toBe(titles.length)
    expect(titles.some((t) => t === featuredLarge.title)).toBe(false)
  })
})
