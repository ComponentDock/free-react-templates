import { render, screen } from '@testing-library/react'
import { SmallRecipes } from './SmallRecipes'

describe('SmallRecipes', () => {
  it('renders all 9 small recipes', () => {
    render(<SmallRecipes />)
    expect(screen.getByText('Homemade Italian Pasta')).toBeInTheDocument()
    expect(screen.getByText('Baked Bread')).toBeInTheDocument()
    expect(screen.getByText('Scallops on Salt')).toBeInTheDocument()
    expect(screen.getByText('Fruits on Plate')).toBeInTheDocument()
    expect(screen.getByText('Macaroons')).toBeInTheDocument()
    expect(screen.getByText('Chocolate Tart')).toBeInTheDocument()
    expect(screen.getByText('Berry Desert')).toBeInTheDocument()
    expect(screen.getByText('Zucchini Grilled')).toBeInTheDocument()
    expect(screen.getByText('Chicken Salad')).toBeInTheDocument()
  })

  it('renders dates for each recipe', () => {
    render(<SmallRecipes />)
    const dates = screen.getAllByText('January 04, 2018')
    expect(dates).toHaveLength(9)
  })

  it('renders comment counts', () => {
    render(<SmallRecipes />)
    const comments = screen.getAllByText('2 Comments')
    expect(comments).toHaveLength(9)
  })
})
