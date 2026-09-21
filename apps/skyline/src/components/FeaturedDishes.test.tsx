import { render, screen } from '@testing-library/react'
import { FeaturedDishes } from './FeaturedDishes'
import { describe, it, expect } from 'vitest'

describe('FeaturedDishes', () => {
  it('renders the section heading', () => {
    render(<FeaturedDishes />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Dishes')
  })

  it('renders 3 dish cards', () => {
    render(<FeaturedDishes />)
    expect(screen.getByText('Main Course')).toBeInTheDocument()
    expect(screen.getByText('Signature Pasta')).toBeInTheDocument()
    expect(screen.getByText('Dessert Platter')).toBeInTheDocument()
  })

  it('renders dish descriptions', () => {
    render(<FeaturedDishes />)
    expect(screen.getByText(/Chicken steak with garlic bread/i)).toBeInTheDocument()
    expect(screen.getByText(/Lobster ravioli/i)).toBeInTheDocument()
    expect(screen.getByText(/Chocolate fondant/i)).toBeInTheDocument()
  })

  it('renders 3 images', () => {
    render(<FeaturedDishes />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
