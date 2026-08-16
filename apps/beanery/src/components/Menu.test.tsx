import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Menu } from './Menu'
import { menuCategories } from '../data'

describe('Menu', () => {
  it('shows the heading and three category columns with five items each', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()
    for (const category of menuCategories) {
      expect(screen.getByRole('heading', { level: 3, name: category.title })).toBeInTheDocument()
      for (const item of category.items) {
        expect(screen.getByText(item.name)).toBeInTheDocument()
        expect(screen.getAllByText(item.price).length).toBeGreaterThan(0)
        expect(screen.getByText(item.description)).toBeInTheDocument()
      }
    }
  })
})
