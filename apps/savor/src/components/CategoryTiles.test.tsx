import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CategoryTiles } from './CategoryTiles'
import { categories } from '../data'

describe('CategoryTiles', () => {
  it('renders a square image tile per category with name and post count', () => {
    const { container } = render(<CategoryTiles />)

    categories.forEach((category) => {
      expect(screen.getByRole('heading', { name: category.name })).toBeInTheDocument()
      expect(screen.getByText(category.posts)).toBeInTheDocument()
    })
    expect(container.querySelectorAll('img')).toHaveLength(categories.length)
  })
})
