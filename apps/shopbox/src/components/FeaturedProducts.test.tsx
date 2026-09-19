import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedProducts } from './FeaturedProducts'

describe('FeaturedProducts', () => {
  it('renders section heading', () => {
    render(<FeaturedProducts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Products')
  })

  it('renders 4 product cards', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('Minimal Watch')).toBeInTheDocument()
    expect(screen.getByText('Leather Tote Bag')).toBeInTheDocument()
    expect(screen.getByText('Running Sneakers')).toBeInTheDocument()
    expect(screen.getByText('Linen Shirt')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('$129')).toBeInTheDocument()
    expect(screen.getByText('$89')).toBeInTheDocument()
    expect(screen.getByText('$145')).toBeInTheDocument()
    expect(screen.getByText('$55')).toBeInTheDocument()
  })

  it('displays original prices for discounted items', () => {
    render(<FeaturedProducts />)
    expect(screen.getByText('$169')).toBeInTheDocument()
    expect(screen.getByText('$189')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<FeaturedProducts />)
    const ratings = screen.getAllByLabelText(/out of 5 stars/)
    expect(ratings.length).toBe(4)
  })

  it('has add-to-cart buttons (visible on hover)', () => {
    render(<FeaturedProducts />)
    const cartButtons = screen.getAllByLabelText(/Add .* to cart/)
    expect(cartButtons.length).toBe(4)
  })

  it('has wishlist buttons', () => {
    render(<FeaturedProducts />)
    const wishlistButtons = screen.getAllByLabelText(/Add .* to wishlist/)
    expect(wishlistButtons.length).toBe(4)
  })

  it('each product card has an image', () => {
    render(<FeaturedProducts />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('add to cart buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)
    const cartBtn = screen.getByLabelText('Add Minimal Watch to cart')
    await user.click(cartBtn)
    expect(cartBtn).toBeInTheDocument()
  })

  it('wishlist buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<FeaturedProducts />)
    const wishBtn = screen.getByLabelText('Add Minimal Watch to wishlist')
    await user.click(wishBtn)
    expect(wishBtn).toBeInTheDocument()
  })

  it('uses 4-column grid on desktop', () => {
    render(<FeaturedProducts />)
    const grid = screen.getByText('Minimal Watch').closest('.grid')!
    expect(grid.className).toContain('md:grid-cols-4')
  })
})
