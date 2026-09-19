import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section title', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Our flower')).toBeInTheDocument()
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
  })

  it('renders all tab buttons', () => {
    render(<NewArrivals />)
    for (const tab of ['All', 'Bouquet', 'Flower box', 'Flower shelf', 'Basket', 'Gift combos']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('renders 10 products when All tab is active', () => {
    render(<NewArrivals />)
    const cards = screen.getAllByText('Fly Me To The Moon')
    expect(cards.length).toBe(10)
  })

  it('filters products when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    await user.click(screen.getByRole('button', { name: 'Bouquet' }))
    const cards = screen.getAllByText('Fly Me To The Moon')
    expect(cards.length).toBe(2)
  })

  it('renders Add to cart buttons', () => {
    render(<NewArrivals />)
    const buttons = screen.getAllByText('Add to cart')
    expect(buttons.length).toBe(10)
  })

  it('renders the view all products link', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('link', { name: /view all products/i })).toHaveAttribute('href', '#')
  })
})
