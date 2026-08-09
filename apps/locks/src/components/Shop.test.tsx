import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shop } from './Shop'

describe('Shop', () => {
  it('renders the heading and photo tiles with price and cart action', () => {
    render(<Shop />)
    expect(screen.getByRole('heading', { name: /our shop/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /shaves 0/i })).toHaveLength(4)
    expect(screen.getAllByText('$150')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /add to cart/i })).toHaveLength(4)
  })
})
