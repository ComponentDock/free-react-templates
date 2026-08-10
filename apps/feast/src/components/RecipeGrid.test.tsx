import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RecipeGrid } from './RecipeGrid'
import { latestRecipesHeading, recipes } from '../data'

describe('RecipeGrid', () => {
  it('renders the heading and six recipe cards in the grid', () => {
    render(<RecipeGrid />)

    expect(screen.getByRole('heading', { name: latestRecipesHeading })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(recipes.length)

    for (const recipe of recipes) {
      expect(screen.getByRole('img', { name: recipe.name })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: recipe.name })).toBeInTheDocument()
    }
  })
})
