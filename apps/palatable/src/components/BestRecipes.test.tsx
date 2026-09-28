import { render, screen } from '@testing-library/react'
import { BestRecipes } from './BestRecipes'

describe('BestRecipes', () => {
  it('renders section heading', () => {
    render(<BestRecipes />)
    expect(screen.getByRole('heading', { level: 2, name: 'The Best Recipes' })).toBeInTheDocument()
  })

  it('renders all 6 recipe cards', () => {
    render(<BestRecipes />)
    expect(screen.getByText('Sushi Easy Recipe')).toBeInTheDocument()
    expect(screen.getByText('Homemade Burger')).toBeInTheDocument()
    expect(screen.getByText('Vegan Smoothie')).toBeInTheDocument()
    expect(screen.getByText('Calabasa Soup')).toBeInTheDocument()
    expect(screen.getByText('Homemade Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Healthy Fruit Desert')).toBeInTheDocument()
  })

  it('renders star ratings for each recipe', () => {
    render(<BestRecipes />)
    const ratings = screen.getAllByLabelText('4 out of 5 stars')
    expect(ratings).toHaveLength(6)
  })
})
