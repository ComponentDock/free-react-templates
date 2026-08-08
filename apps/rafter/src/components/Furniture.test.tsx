import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Furniture } from './Furniture'

describe('Furniture', () => {
  it('shows the section heading', () => {
    render(<Furniture />)
    expect(screen.getByRole('heading', { name: /Most Popular Furnitures/ })).toBeInTheDocument()
  })

  it('renders three furniture cards with images and titles', () => {
    render(<Furniture />)
    const cards = screen.getAllByRole('heading', { name: /Green Butter Sofa/ })
    expect(cards).toHaveLength(3)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
