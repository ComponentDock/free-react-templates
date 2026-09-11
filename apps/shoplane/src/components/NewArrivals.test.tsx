import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the heading', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { name: /new arrivals/i })).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: "Women's" })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accessories' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: "Men's" })).toBeInTheDocument()
  })

  it('shows all products by default', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Fujifilm X100T 16 MP Digital Camera')).toBeInTheDocument()
    expect(screen.getByText('Samsung CF591 Series Curved Monitor')).toBeInTheDocument()
    expect(screen.getByText('DYMO LabelWriter 450 Turbo')).toBeInTheDocument()
  })

  it('filters products when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)

    await user.click(screen.getByRole('button', { name: "Women's" }))

    expect(screen.getByText('Samsung CF591 Series Curved Monitor')).toBeInTheDocument()
    expect(screen.getByText('Blue Yeti USB Microphone')).toBeInTheDocument()
    expect(screen.queryByText('DYMO LabelWriter 450 Turbo')).not.toBeInTheDocument()
  })

  it('shows sale and new badges', () => {
    render(<NewArrivals />)
    const saleBadges = screen.getAllByText('sale')
    expect(saleBadges.length).toBeGreaterThan(0)
    const newBadges = screen.getAllByText('new')
    expect(newBadges.length).toBeGreaterThan(0)
  })

  it('displays prices with original prices for discounted items', () => {
    render(<NewArrivals />)
    expect(screen.getByText('$520.00')).toBeInTheDocument()
    expect(screen.getByText('$590.00')).toBeInTheDocument()
  })

  it('renders add to cart buttons', () => {
    render(<NewArrivals />)
    const cartButtons = screen.getAllByText(/add to cart/i)
    expect(cartButtons.length).toBeGreaterThan(0)
  })

  it('filters to show only accessories', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)

    await user.click(screen.getByRole('button', { name: 'Accessories' }))

    expect(screen.getByText('DYMO LabelWriter 450 Turbo')).toBeInTheDocument()
    expect(screen.queryByText('Samsung CF591 Series Curved Monitor')).not.toBeInTheDocument()
  })

  it('filters to show only men products', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)

    await user.click(screen.getByRole('button', { name: "Men's" }))

    expect(screen.getByText('Fujifilm X100T 16 MP Digital Camera')).toBeInTheDocument()
    expect(screen.queryByText('Blue Yeti USB Microphone')).not.toBeInTheDocument()
  })

  it('returns to all when clicking all tab after filtering', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)

    await user.click(screen.getByRole('button', { name: "Women's" }))
    await user.click(screen.getByRole('button', { name: 'All' }))

    expect(screen.getByText('Fujifilm X100T 16 MP Digital Camera')).toBeInTheDocument()
    expect(screen.getByText('DYMO LabelWriter 450 Turbo')).toBeInTheDocument()
  })
})
