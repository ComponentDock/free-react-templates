import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedRecipes } from './FeaturedRecipes'
import { featuredRecipes, featuredTitle } from '../data'

describe('FeaturedRecipes', () => {
  it('renders the pink title bar with the featured title', () => {
    render(<FeaturedRecipes />)
    expect(screen.getByRole('heading', { level: 5, name: featuredTitle })).toBeInTheDocument()
  })

  it('renders two horizontal cards with headline, excerpt and image', () => {
    const { container } = render(<FeaturedRecipes />)
    for (const recipe of featuredRecipes) {
      expect(screen.getByRole('heading', { level: 4, name: recipe.title })).toBeInTheDocument()
      expect(screen.getByText(recipe.excerpt)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
