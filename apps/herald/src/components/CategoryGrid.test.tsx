import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryGrid } from './CategoryGrid'
import { gridCategories } from '../data'

describe('CategoryGrid', () => {
  it('renders the four category cards in a 2x2 grid', () => {
    render(<CategoryGrid />)
    expect(gridCategories).toHaveLength(4)
    for (const category of gridCategories) {
      expect(screen.getByRole('heading', { name: category.title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: category.headline })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: category.headline })).toBeInTheDocument()
    }
  })

  it('shows a divider and three paragraphs per card', () => {
    const { container } = render(<CategoryGrid />)
    for (const category of gridCategories) {
      expect(category.paragraphs).toHaveLength(3)
      for (const paragraph of category.paragraphs) {
        expect(screen.getByText(paragraph)).toBeInTheDocument()
      }
    }
    expect(container.querySelectorAll('.border-t')).toHaveLength(gridCategories.length)
  })
})
