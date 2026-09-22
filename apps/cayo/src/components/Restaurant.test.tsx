import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Restaurant } from './Restaurant'

describe('Restaurant', () => {
  it('renders section heading', () => {
    render(<Restaurant />)
    expect(screen.getByText('Our Restaurants')).toBeInTheDocument()
  })

  it('renders the Dining subheading', () => {
    render(<Restaurant />)
    expect(screen.getByText('Dining')).toBeInTheDocument()
  })

  it('renders tab buttons', () => {
    render(<Restaurant />)
    expect(screen.getByRole('button', { name: 'Main Dish' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Drinks' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Desserts' })).toBeInTheDocument()
  })

  it('shows Main Dish tab by default', () => {
    render(<Restaurant />)
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument()
    expect(screen.getByText('Filet Mignon')).toBeInTheDocument()
    expect(screen.getByText('Pasta Primavera')).toBeInTheDocument()
  })

  it('switches to Drinks tab', async () => {
    const user = userEvent.setup()
    render(<Restaurant />)
    await user.click(screen.getByRole('button', { name: 'Drinks' }))
    expect(screen.getByText('Tropical Sunset')).toBeInTheDocument()
    expect(screen.getByText('Cayo Signature')).toBeInTheDocument()
    expect(screen.getByText('Berry Smoothie')).toBeInTheDocument()
  })

  it('switches to Desserts tab', async () => {
    const user = userEvent.setup()
    render(<Restaurant />)
    await user.click(screen.getByRole('button', { name: 'Desserts' }))
    expect(screen.getByText('Chocolate Lava')).toBeInTheDocument()
    expect(screen.getByText('Crème Brûlée')).toBeInTheDocument()
    expect(screen.getByText('Tropical Fruit Platter')).toBeInTheDocument()
  })

  it('renders prices for menu items', () => {
    render(<Restaurant />)
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$45')).toBeInTheDocument()
    expect(screen.getByText('$22')).toBeInTheDocument()
  })

  it('renders Add to cart buttons', () => {
    render(<Restaurant />)
    const addToCartButtons = screen.getAllByText('Add to cart')
    expect(addToCartButtons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders star ratings', () => {
    render(<Restaurant />)
    const stars = document.querySelectorAll('.text-brand')
    expect(stars.length).toBeGreaterThan(0)
  })
})
