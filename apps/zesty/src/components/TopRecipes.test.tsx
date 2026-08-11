import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopRecipes } from './TopRecipes'
import { topRecipeLarge, topRecipeSmalls, topRecipesTitle } from '../data'

describe('TopRecipes', () => {
  it('renders the pink title bar and the decorative plus box', () => {
    const { container } = render(<TopRecipes />)
    expect(screen.getByRole('heading', { level: 5, name: topRecipesTitle })).toBeInTheDocument()
    expect(container.querySelectorAll('[aria-hidden="true"]')).not.toHaveLength(0)
  })

  it('renders the large card with pill, headline and excerpt', () => {
    render(<TopRecipes />)
    expect(
      screen.getByRole('heading', { level: 4, name: topRecipeLarge.title }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(topRecipeLarge.category).length).toBeGreaterThan(0)
    expect(screen.getByText(topRecipeLarge.excerpt)).toBeInTheDocument()
  })

  it('renders four small cards with pills and excerpts', () => {
    const { container } = render(<TopRecipes />)
    for (const recipe of topRecipeSmalls) {
      expect(screen.getByRole('heading', { level: 4, name: recipe.title })).toBeInTheDocument()
      expect(screen.getByText(recipe.excerpt)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(5)
  })

  it('wraps each small card image in a hover group with a plus icon', () => {
    const { container } = render(<TopRecipes />)
    const smallImages = container.querySelectorAll('img')
    expect(smallImages).toHaveLength(5)
    const groupWrappers = container.querySelectorAll('.group')
    expect(groupWrappers.length).toBeGreaterThanOrEqual(4)
  })
})
