import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryCards } from './CategoryCards'
import { categories } from '../data'

describe('CategoryCards', () => {
  it('renders three photo cards with titles and Shop Now links', () => {
    render(<CategoryCards />)
    for (const category of categories) {
      expect(screen.getByRole('heading', { level: 2, name: category.title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: category.alt })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Shop Now')).toHaveLength(3)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })
})
