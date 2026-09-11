import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularDishes } from './PopularDishes'

describe('PopularDishes', () => {
  it('renders the section heading', () => {
    render(<PopularDishes />)
    expect(screen.getByRole('heading', { name: /Our Exclusive Items/i })).toBeInTheDocument()
    expect(screen.getByText(/Popular Dishes/i)).toBeInTheDocument()
  })

  it('renders all four dish cards', () => {
    render(<PopularDishes />)
    expect(screen.getByRole('heading', { name: /Indian Burger/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Creamy Noodles/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Honey Meat/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Garden Fresh Salad/i })).toBeInTheDocument()
  })

  it('renders Read More links for each dish', () => {
    render(<PopularDishes />)
    const links = screen.getAllByText(/Read More/i)
    expect(links).toHaveLength(4)
  })

  it('renders dish images with accessible names', () => {
    render(<PopularDishes />)
    expect(screen.getByRole('img', { name: /Indian Burger/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: /Creamy Noodles/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
