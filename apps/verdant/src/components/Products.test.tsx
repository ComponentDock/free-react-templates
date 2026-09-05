import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Products } from './Products'

describe('Products', () => {
  it('renders section heading', () => {
    render(<Products />)
    expect(screen.getByText(/new arrivals/i)).toBeInTheDocument()
  })

  it('renders 4 product cards with prices', () => {
    render(<Products />)
    const prices = screen.getAllByText('$10.99')
    expect(prices).toHaveLength(4)
    const names = screen.getAllByText('Cactus Flower')
    expect(names).toHaveLength(4)
  })

  it('shows Hot tag on first and last products', () => {
    render(<Products />)
    const hotTags = screen.getAllByText('Hot')
    expect(hotTags).toHaveLength(2)
  })

  it('shows product meta on hover', async () => {
    const user = userEvent.setup()
    render(<Products />)
    const products = screen.getAllByText('Cactus Flower')
    await user.hover(products[0])
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/compare/i)).toBeInTheDocument()
  })

  it('hides product meta on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Products />)
    const products = screen.getAllByText('Cactus Flower')
    await user.hover(products[0])
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    await user.unhover(products[0])
    expect(screen.queryByLabelText(/add to wishlist/i)).not.toBeInTheDocument()
  })

  it('renders View All button', () => {
    render(<Products />)
    expect(screen.getByRole('link', { name: /view all/i })).toBeInTheDocument()
  })
})
