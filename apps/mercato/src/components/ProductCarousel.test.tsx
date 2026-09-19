import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCarousel } from './ProductCarousel'

describe('ProductCarousel', () => {
  it('shows Latest Products heading by default', () => {
    render(<ProductCarousel />)
    expect(screen.getByRole('heading', { name: /Latest Products/i })).toBeInTheDocument()
  })

  it('shows Latest Products tab as active by default', () => {
    render(<ProductCarousel />)
    const latestBtn = screen.getByRole('button', { name: 'Latest Products' })
    expect(latestBtn).toHaveClass('bg-gradient-to-r')
  })

  it('renders product cards', () => {
    render(<ProductCarousel />)
    expect(screen.getByText('Running Shoes Pro')).toBeInTheDocument()
    expect(screen.getByText('Sport Sneakers X')).toBeInTheDocument()
  })

  it('switches to Coming Products on tab click', async () => {
    const user = userEvent.setup()
    render(<ProductCarousel />)
    await user.click(screen.getByRole('button', { name: 'Coming Products' }))
    expect(screen.getByRole('heading', { name: /Coming Products/i })).toBeInTheDocument()
    expect(screen.getByText('Urban Trail Elite')).toBeInTheDocument()
  })

  it('switches back to Latest Products', async () => {
    const user = userEvent.setup()
    render(<ProductCarousel />)
    await user.click(screen.getByRole('button', { name: 'Coming Products' }))
    await user.click(screen.getByRole('button', { name: 'Latest Products' }))
    expect(screen.getByRole('heading', { name: /Latest Products/i })).toBeInTheDocument()
    expect(screen.getByText('Running Shoes Pro')).toBeInTheDocument()
  })

  it('shows product prices with strikethrough', () => {
    render(<ProductCarousel />)
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('$210.00')).toBeInTheDocument()
  })

  it('has action buttons on product cards', () => {
    render(<ProductCarousel />)
    const addBtns = screen.getAllByLabelText('Add to bag')
    expect(addBtns.length).toBeGreaterThanOrEqual(4)
  })

  it('has wishlist buttons', () => {
    render(<ProductCarousel />)
    const wishlistBtns = screen.getAllByLabelText('Wishlist')
    expect(wishlistBtns.length).toBeGreaterThanOrEqual(4)
  })

  it('has compare buttons', () => {
    render(<ProductCarousel />)
    const compareBtns = screen.getAllByLabelText('Compare')
    expect(compareBtns.length).toBeGreaterThanOrEqual(4)
  })

  it('has view more buttons', () => {
    render(<ProductCarousel />)
    const viewMoreBtns = screen.getAllByLabelText('View more')
    expect(viewMoreBtns.length).toBeGreaterThanOrEqual(4)
  })

  it('renders subtitle text', () => {
    render(<ProductCarousel />)
    expect(screen.getByText(/Discover our newest collection/)).toBeInTheDocument()
  })
})
