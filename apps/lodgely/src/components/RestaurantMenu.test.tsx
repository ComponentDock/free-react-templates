import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RestaurantMenu } from './RestaurantMenu'

describe('RestaurantMenu', () => {
  it('renders the Restaurant Menu heading', () => {
    render(<RestaurantMenu />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Restaurant Menu')
  })

  it('renders Mains, Desserts, and Drinks tabs', () => {
    render(<RestaurantMenu />)

    expect(screen.getByRole('button', { name: 'Mains' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Desserts' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Drinks' })).toBeInTheDocument()
  })

  it('has Mains tab active by default', () => {
    render(<RestaurantMenu />)

    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument()
    expect(screen.getByText('$24')).toBeInTheDocument()
  })

  it('switches to Desserts tab on click', async () => {
    const user = userEvent.setup()
    render(<RestaurantMenu />)

    await user.click(screen.getByRole('button', { name: 'Desserts' }))

    expect(screen.getByText('Tiramisu')).toBeInTheDocument()
    expect(screen.queryByText('Grilled Salmon')).not.toBeInTheDocument()
  })

  it('switches to Drinks tab on click', async () => {
    const user = userEvent.setup()
    render(<RestaurantMenu />)

    await user.click(screen.getByRole('button', { name: 'Drinks' }))

    expect(screen.getByText('Signature Cocktail')).toBeInTheDocument()
    expect(screen.queryByText('Grilled Salmon')).not.toBeInTheDocument()
  })

  it('displays prices for menu items', () => {
    render(<RestaurantMenu />)

    expect(screen.getByText('$24')).toBeInTheDocument()
    expect(screen.getByText('$38')).toBeInTheDocument()
  })
})
