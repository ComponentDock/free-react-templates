import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders feature cards with correct titles', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Money Savings' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Online Shoppings' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Credit/Debit Cards' })).toBeInTheDocument()
  })

  it('renders three feature cards', () => {
    const { container } = render(<Features />)
    const cards = container.querySelectorAll('[class*="rounded-2xl"][class*="bg-white"]')
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })
})
