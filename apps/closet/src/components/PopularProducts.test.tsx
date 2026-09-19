import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularProducts } from './PopularProducts'

describe('PopularProducts', () => {
  it('renders the section heading', () => {
    render(<PopularProducts />)
    expect(screen.getByText('Popular on Closet')).toBeInTheDocument()
  })

  it('shows category tabs', () => {
    render(<PopularProducts />)
    expect(screen.getByRole('button', { name: 'Women' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Men' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Kids' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Home Deco' })).toBeInTheDocument()
  })

  it('shows Women products by default', () => {
    render(<PopularProducts />)
    expect(screen.getByText('Floral Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Casual Blouse')).toBeInTheDocument()
  })

  it('switches to Men tab', async () => {
    const user = userEvent.setup()
    render(<PopularProducts />)
    await user.click(screen.getByRole('button', { name: 'Men' }))
    expect(screen.getByText('Oxford Shirt')).toBeInTheDocument()
    expect(screen.queryByText('Floral Summer Dress')).not.toBeInTheDocument()
  })

  it('switches to Kids tab', async () => {
    const user = userEvent.setup()
    render(<PopularProducts />)
    await user.click(screen.getByRole('button', { name: 'Kids' }))
    expect(screen.getByText('Play Dress')).toBeInTheDocument()
  })

  it('switches to Home Deco tab', async () => {
    const user = userEvent.setup()
    render(<PopularProducts />)
    await user.click(screen.getByRole('button', { name: 'Home Deco' }))
    expect(screen.getByText('Linen Cushion')).toBeInTheDocument()
  })

  it('displays product prices', () => {
    render(<PopularProducts />)
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })
})
