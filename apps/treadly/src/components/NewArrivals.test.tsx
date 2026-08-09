import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the heading, four product cards, and the Shop New Arrivals link', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { name: 'New Arrivals' })).toBeInTheDocument()

    for (const name of [
      'Court Dominator X',
      'Summer Slide Sport',
      'Marathon Elite',
      'Cloud 9 Recovery',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('button', { name: /to cart/i })).toHaveLength(4)
    expect(screen.getAllByText('New')).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Shop New Arrivals' })).toBeInTheDocument()
  })
})
