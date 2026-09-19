import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section heading', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { name: 'New Arrivals' })).toBeInTheDocument()
  })

  it('renders 6 product cards', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Kiko Linen Slip Dress')).toBeInTheDocument()
    expect(screen.getByText('Sleeve Dress, White')).toBeInTheDocument()
    expect(screen.getByText('Hodina Watch')).toBeInTheDocument()
    expect(screen.getByText('Triangle Low White-Black')).toBeInTheDocument()
    expect(screen.getByText('Kid Dress, White')).toBeInTheDocument()
    expect(screen.getByText('Lady Shoes, Brown')).toBeInTheDocument()
  })

  it('renders 6 add to cart buttons', () => {
    render(<NewArrivals />)
    const buttons = screen.getAllByRole('button', { name: /add to cart/i })
    expect(buttons).toHaveLength(6)
  })

  it('renders new and sale badges', () => {
    render(<NewArrivals />)
    expect(screen.getAllByText('new')).toHaveLength(2)
    expect(screen.getAllByText('sale')).toHaveLength(2)
  })
})
