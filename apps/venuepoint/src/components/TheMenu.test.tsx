import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TheMenu } from './TheMenu'
import type { Dish } from './menuData'

const sampleDish: Dish = {
  title: 'Test Dish',
  price: '$15',
  ingredients: ['Salt', 'Pepper'],
}

function renderDish(dish: Dish) {
  return render(
    <ul>
      <li>
        <span>{dish.title}</span>
        <span>{dish.price}</span>
        <ul>
          {dish.ingredients.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </li>
    </ul>,
  )
}

describe('MenuCard (inline rendering)', () => {
  it('renders dish title, price, and ingredients', () => {
    renderDish(sampleDish)
    expect(screen.getByText('Test Dish')).toBeInTheDocument()
    expect(screen.getByText('$15')).toBeInTheDocument()
    expect(screen.getByText('Salt')).toBeInTheDocument()
    expect(screen.getByText('Pepper')).toBeInTheDocument()
  })
})

describe('TheMenu', () => {
  it('renders the title bar', () => {
    render(<TheMenu />)
    expect(screen.getByText('The Menu')).toBeInTheDocument()
    expect(screen.getByText('5 Stars')).toBeInTheDocument()
  })

  it('renders three category headings', () => {
    render(<TheMenu />)
    expect(screen.getByText('Starters')).toBeInTheDocument()
    expect(screen.getByText('Main')).toBeInTheDocument()
    expect(screen.getByText('Desserts')).toBeInTheDocument()
  })

  it('renders dishes in each category', () => {
    render(<TheMenu />)
    // Starters has "Shrimp with Garlic" at price $17
    expect(screen.getAllByText('Shrimp with Garlic').length).toBeGreaterThanOrEqual(1)
    // Main has "Chicken with Lemon"
    expect(screen.getByText('Chicken with Lemon')).toBeInTheDocument()
    // Desserts has "Lava Cake"
    expect(screen.getByText('Lava Cake')).toBeInTheDocument()
  })

  it('renders custom categories when provided', () => {
    const custom = [
      {
        title: 'Drinks',
        dishes: [{ title: 'Water', price: '$2', ingredients: ['H2O'] }],
      },
    ]
    render(<TheMenu categories={custom} />)
    expect(screen.getByText('Drinks')).toBeInTheDocument()
    expect(screen.getByText('Water')).toBeInTheDocument()
  })

  it('renders star icons in the title bar', () => {
    const { container } = render(<TheMenu />)
    const stars = container.querySelectorAll('.fill-accent-400')
    expect(stars.length).toBeGreaterThanOrEqual(5)
  })

  it('renders Order Now links for each dish', () => {
    render(<TheMenu />)
    const orderLinks = screen.getAllByRole('link', { name: /order now/i })
    expect(orderLinks.length).toBe(15) // 5 dishes x 3 categories
  })
})
