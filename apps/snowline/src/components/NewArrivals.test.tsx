import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section heading and filter tabs', () => {
    render(<NewArrivals />)
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Men' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Women' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shoes' })).toBeInTheDocument()
  })

  it('shows all products by default', () => {
    render(<NewArrivals />)
    expect(screen.getAllByText('Canvas Low-Top Sneaker')).toHaveLength(1)
    expect(screen.getAllByText('Classic Denim Jacket')).toHaveLength(1)
    expect(screen.getAllByText('Sport Running Shoe')).toHaveLength(1)
    expect(screen.getAllByText('Cotton Graphic Tee')).toHaveLength(1)
    expect(screen.getAllByText('Slim Fit Chinos')).toHaveLength(1)
    expect(screen.getAllByText('Leather Ankle Boot')).toHaveLength(1)
  })

  it('filters products when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    await user.click(screen.getByRole('button', { name: 'Shoes' }))
    expect(screen.getByText('Canvas Low-Top Sneaker')).toBeInTheDocument()
    expect(screen.getByText('Sport Running Shoe')).toBeInTheDocument()
    expect(screen.getByText('Leather Ankle Boot')).toBeInTheDocument()
    expect(screen.queryByText('Classic Denim Jacket')).not.toBeInTheDocument()
  })

  it('shows all products when All tab is clicked', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    await user.click(screen.getByRole('button', { name: 'Men' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Canvas Low-Top Sneaker')).toBeInTheDocument()
    expect(screen.getByText('Classic Denim Jacket')).toBeInTheDocument()
  })

  it('renders star ratings and prices', () => {
    render(<NewArrivals />)
    const stars = screen.getAllByLabelText('5 out of 5 stars')
    expect(stars.length).toBe(6)
    expect(screen.getAllByText('$150').length).toBe(6)
  })

  it('renders wishlist and bag buttons for each product', () => {
    render(<NewArrivals />)
    expect(screen.getAllByLabelText(/Add .* to wishlist/).length).toBe(6)
    expect(screen.getAllByLabelText(/Add .* to bag/).length).toBe(6)
  })
})
