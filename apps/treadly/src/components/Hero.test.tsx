import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, trust row, CTAs, and sneaker image', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Step Into Your Best')
    expect(screen.getByText(/Premium footwear for every step/)).toBeInTheDocument()
    expect(screen.getByText('Up to 40% Off')).toBeInTheDocument()
    for (const trust of ['4.9 Average Rating', 'Free Shipping over $75', '60-Day Easy Returns']) {
      expect(screen.getByText(trust)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#shop')
    expect(screen.getByRole('link', { name: 'Browse Categories' })).toHaveAttribute(
      'href',
      '#featured',
    )
    expect(screen.getByRole('img', { name: /sneaker/i })).toBeInTheDocument()
  })
})
