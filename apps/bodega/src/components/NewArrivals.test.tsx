import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders heading and products', () => {
    render(<NewArrivals />)
    expect(screen.getByText('New Arrival')).toBeInTheDocument()
    expect(screen.getByText('Floral Print Dress')).toBeInTheDocument()
    expect(screen.getByText('$24.50')).toBeInTheDocument()
  })

  it('renders all 8 product cards', () => {
    render(<NewArrivals />)
    expect(screen.getAllByRole('img')).toHaveLength(8)
  })

  it('shows badges on products', () => {
    render(<NewArrivals />)
    expect(screen.getAllByText('New').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Sale').length).toBeGreaterThanOrEqual(1)
  })

  it('calls onAddToCart when button is clicked', async () => {
    const onAdd = vi.fn()
    const user = userEvent.setup()
    render(<NewArrivals onAddToCart={onAdd} />)
    const buttons = screen.getAllByLabelText(/Add .* to cart/)
    await user.click(buttons[0]!)
    expect(onAdd).toHaveBeenCalledWith(1)
  })

  it('has proper aria label', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('region', { name: 'New arrivals' })).toBeInTheDocument()
  })
})
