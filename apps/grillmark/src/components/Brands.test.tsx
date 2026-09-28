import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the heading and brand names', () => {
    render(<Brands />)
    expect(screen.getByRole('heading', { name: /In association with/i })).toBeInTheDocument()
    for (const brand of [
      'Steakhouse Pro',
      'Grill Master',
      'Prime Cuts',
      'BBQ Nation',
      'Fire & Flame',
      'The Smoke House',
    ]) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }
  })
})
