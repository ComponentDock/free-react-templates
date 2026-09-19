import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularItems } from './PopularItems'

describe('PopularItems', () => {
  it('renders the section heading', () => {
    render(<PopularItems />)
    expect(screen.getByRole('heading', { name: 'Popular Items' })).toBeInTheDocument()
  })

  it('renders 6 product cards', () => {
    render(<PopularItems />)
    expect(screen.getByText('Kiko Linen Slip Dress')).toBeInTheDocument()
    expect(screen.getByText('Sleeve Dress, White')).toBeInTheDocument()
    expect(screen.getByText('Hodina Watch')).toBeInTheDocument()
    expect(screen.getByText('Triangle Low White-Black')).toBeInTheDocument()
    expect(screen.getByText('Kid Dress, White')).toBeInTheDocument()
    expect(screen.getByText('Lady Shoes, Brown')).toBeInTheDocument()
  })

  it('renders 6 add to cart buttons', () => {
    render(<PopularItems />)
    const buttons = screen.getAllByRole('button', { name: /add to cart/i })
    expect(buttons).toHaveLength(6)
  })
})
