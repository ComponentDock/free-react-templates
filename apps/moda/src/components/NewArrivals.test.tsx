import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the heading, subtext, and See All New link', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { level: 2, name: 'Just Dropped' })).toBeInTheDocument()
    expect(
      screen.getByText('New Arrivals — Fresh styles added to our collection'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See All New' })).toBeInTheDocument()
  })

  it('renders four new-arrival product cards with New badges', () => {
    render(<NewArrivals />)
    for (const title of [
      'Cashmere Crewneck Sweater',
      'Minimalist Leather Sneakers',
      'Printed Silk Scarf',
      'Suede Chelsea Boots',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('New')).toHaveLength(4)
  })
})
