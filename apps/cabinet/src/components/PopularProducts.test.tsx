import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularProducts } from './PopularProducts'

describe('PopularProducts', () => {
  it('renders the section heading', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular products')
  })

  it('renders tab buttons', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('tab', { name: 'Sofas' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Tables' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Chairs' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Beds' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Lighting' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Decor' })).toBeInTheDocument()
  })

  it('defaults to Sofas tab with products', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('tab', { name: 'Sofas' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Halland Velvet 3-Seat Sofa')).toBeInTheDocument()
  })

  it('switches to Tables tab on click', async () => {
    const user = userEvent.setup()
    render(<PopularProducts />)
    await user.click(screen.getByRole('tab', { name: 'Tables' }))
    expect(screen.getByRole('tab', { name: 'Tables' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Thornby Oak Dining Table')).toBeInTheDocument()
  })

  it('renders view all button', () => {
    render(<PopularProducts />)
    expect(screen.getByText('View all')).toBeInTheDocument()
  })

  it('has tablist aria label', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('tablist', { name: 'Popular products' })).toBeInTheDocument()
  })
})
