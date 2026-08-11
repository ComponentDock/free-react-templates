import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopRecipes } from './TopRecipes'
import { topRecipeLarge, topRecipeSmalls, topRecipesTitle } from '../data'

describe('TopRecipes', () => {
  it('renders the pink section-title box with the white right-aligned heading', () => {
    render(<TopRecipes />)
    const heading = screen.getByRole('heading', { level: 5, name: topRecipesTitle })
    expect(heading).toBeInTheDocument()
    const box = heading.closest('[data-section-title-box]')
    expect(box).toHaveClass('bg-brand')
    expect(box).toHaveClass('absolute')
    expect(heading).toHaveClass('text-white')
  })

  it('renders the large card with photo, tag, title, and excerpt', () => {
    const { container } = render(<TopRecipes />)
    // The large card's title is also used by one small card in the source
    // template — assert at least one heading with it.
    expect(
      screen.getAllByRole('heading', { level: 4, name: topRecipeLarge.title }).length,
    ).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(topRecipeLarge.category).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(topRecipeLarge.excerpt)).toBeInTheDocument()
    expect(container.querySelector('[data-large-image]')).toHaveClass('h-[514px]')
  })

  it('renders at least four small items with thumbnails, tags, titles, and excerpts', () => {
    const { container } = render(<TopRecipes />)
    expect(topRecipeSmalls.length).toBeGreaterThanOrEqual(4)
    for (const item of topRecipeSmalls) {
      expect(
        screen.getAllByRole('heading', { level: 4, name: item.title }).length,
      ).toBeGreaterThanOrEqual(1)
      expect(screen.getByText(item.excerpt)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(5)
  })

  it('renders category tags as pink uppercase pills', () => {
    const { container } = render(<TopRecipes />)
    const tags = container.querySelectorAll('[data-cat-tag]')
    expect(tags.length).toBeGreaterThanOrEqual(5)
    for (const tag of tags) {
      expect(tag).toHaveClass('bg-brand')
      expect(tag).toHaveClass('uppercase')
      expect(tag).toHaveClass('text-white')
    }
  })
})
