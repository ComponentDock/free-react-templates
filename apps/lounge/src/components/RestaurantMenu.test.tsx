import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RestaurantMenu } from './RestaurantMenu'

describe('RestaurantMenu', () => {
  it('renders section heading', () => {
    render(<RestaurantMenu />)
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Restaurant & Bar')).toBeInTheDocument()
  })

  it('renders menu tabs', () => {
    render(<RestaurantMenu />)
    expect(screen.getByText('Main')).toBeInTheDocument()
    expect(screen.getByText('Dessert')).toBeInTheDocument()
    expect(screen.getByText('Drinks')).toBeInTheDocument()
  })

  it('shows main items by default', () => {
    render(<RestaurantMenu />)
    expect(screen.getByText('Grilled Beef with Potatoes')).toBeInTheDocument()
    const prices = screen.getAllByText('$29')
    expect(prices.length).toBeGreaterThanOrEqual(1)
  })

  it('switches to dessert tab', async () => {
    const user = userEvent.setup()
    render(<RestaurantMenu />)
    await user.click(screen.getByText('Dessert'))
    expect(screen.getByText('Chocolate Lava Cake')).toBeInTheDocument()
  })

  it('switches to drinks tab', async () => {
    const user = userEvent.setup()
    render(<RestaurantMenu />)
    await user.click(screen.getByText('Drinks'))
    expect(screen.getByText('Tropical Smoothie')).toBeInTheDocument()
  })
})
