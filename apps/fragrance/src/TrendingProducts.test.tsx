import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TrendingProducts, ProductCard } from './components/TrendingProducts'

describe('TrendingProducts', () => {
  it('renders heading "Trending Product"', () => {
    render(<TrendingProducts />)
    expect(screen.getByRole('heading', { name: /trending product/i })).toBeInTheDocument()
  })

  it('renders 8 product cards', () => {
    render(<TrendingProducts />)
    const cards = screen.getAllByText('$150.00')
    expect(cards).toHaveLength(8)
  })

  it('renders product names', () => {
    render(<TrendingProducts />)
    expect(screen.getByText('Classic Blazer')).toBeInTheDocument()
    expect(screen.getByText('Silk Scarf')).toBeInTheDocument()
    expect(screen.getByText('Denim Jacket')).toBeInTheDocument()
  })

  it('shows action icons on hover', async () => {
    const user = userEvent.setup()
    render(<ProductCard name="Test Item" category="Cat" seed="test-seed-1" />)
    const card = screen.getByText('Test Item').closest('.group')!
    await user.hover(card)
    expect(screen.getByLabelText(/search test item/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/add test item to cart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/add test item to wishlist/i)).toBeInTheDocument()
  })
})
