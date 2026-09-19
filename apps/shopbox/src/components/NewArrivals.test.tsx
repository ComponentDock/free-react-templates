import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders section heading', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('New Arrivals')
  })

  it('renders 4 product cards', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Canvas Backpack')).toBeInTheDocument()
    expect(screen.getByText('Denim Jacket')).toBeInTheDocument()
    expect(screen.getByText('Sport Sunglasses')).toBeInTheDocument()
    expect(screen.getByText('Wool Scarf')).toBeInTheDocument()
  })

  it('displays NEW badges', () => {
    render(<NewArrivals />)
    const badges = screen.getAllByText('NEW')
    expect(badges.length).toBe(4)
  })

  it('displays prices', () => {
    render(<NewArrivals />)
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$110')).toBeInTheDocument()
    expect(screen.getByText('$65')).toBeInTheDocument()
    expect(screen.getByText('$45')).toBeInTheDocument()
  })

  it('displays original price for discounted item', () => {
    render(<NewArrivals />)
    expect(screen.getByText('$85')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<NewArrivals />)
    const ratings = screen.getAllByLabelText(/out of 5 stars/)
    expect(ratings.length).toBe(4)
  })

  it('has add-to-cart buttons', () => {
    render(<NewArrivals />)
    const cartButtons = screen.getAllByLabelText(/Add .* to cart/)
    expect(cartButtons.length).toBe(4)
  })

  it('has wishlist buttons', () => {
    render(<NewArrivals />)
    const wishButtons = screen.getAllByLabelText(/Add .* to wishlist/)
    expect(wishButtons.length).toBe(4)
  })

  it('each product card has an image', () => {
    render(<NewArrivals />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('add to cart buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    const cartBtn = screen.getByLabelText('Add Canvas Backpack to cart')
    await user.click(cartBtn)
    expect(cartBtn).toBeInTheDocument()
  })

  it('wishlist buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    const wishBtn = screen.getByLabelText('Add Canvas Backpack to wishlist')
    await user.click(wishBtn)
    expect(wishBtn).toBeInTheDocument()
  })

  it('has light background', () => {
    render(<NewArrivals />)
    const section = screen.getByText('New Arrivals').closest('section')!
    expect(section.className).toContain('bg-gray-50')
  })
})
