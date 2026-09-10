import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PopularItems } from './PopularItems'

describe('PopularItems', () => {
  it('renders section heading', () => {
    render(<PopularItems />)
    expect(screen.getByText('Our Exclusive Cakes')).toBeDefined()
  })

  it('displays at least 3 product cards', () => {
    render(<PopularItems />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })

  it('shows cake names, prices, and order buttons', () => {
    render(<PopularItems />)
    expect(screen.getByText('Chocolate Delight')).toBeDefined()
    expect(screen.getByText('$35.00')).toBeDefined()
    expect(screen.getAllByText('Order Now').length).toBeGreaterThanOrEqual(3)
  })

  it('renders product images', () => {
    render(<PopularItems />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBeGreaterThanOrEqual(3)
  })
})
