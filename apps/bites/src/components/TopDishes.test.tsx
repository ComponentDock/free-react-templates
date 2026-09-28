import { render, screen } from '@testing-library/react'
import { TopDishes } from './TopDishes'

describe('TopDishes', () => {
  it('renders the section heading', () => {
    render(<TopDishes />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Top Rated Dishes')
  })

  it('renders three dish cards', () => {
    render(<TopDishes />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })

  it('displays dish names', () => {
    render(<TopDishes />)
    expect(screen.getByText('Bread Fruit Cheese Sandwich')).toBeInTheDocument()
    expect(screen.getByText('Beef Cutlet with Spring Onion')).toBeInTheDocument()
    expect(screen.getByText('Meat with Sauce & Vegetables')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<TopDishes />)
    expect(screen.getByText('$5.59')).toBeInTheDocument()
    expect(screen.getByText('$8.99')).toBeInTheDocument()
    expect(screen.getByText('$9.49')).toBeInTheDocument()
  })

  it('displays dish images', () => {
    render(<TopDishes />)
    expect(screen.getByAltText('Bread Fruit Cheese Sandwich')).toBeInTheDocument()
    expect(screen.getByAltText('Beef Cutlet with Spring Onion')).toBeInTheDocument()
    expect(screen.getByAltText('Meat with Sauce & Vegetables')).toBeInTheDocument()
  })
})
