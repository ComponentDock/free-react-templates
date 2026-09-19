import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtitle, and CTA buttons', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Shop With Us')
    expect(screen.getByText(/Discover the best products/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#products')
    expect(screen.getByRole('link', { name: 'Club Membership' })).toHaveAttribute(
      'href',
      '#special',
    )
  })
})
