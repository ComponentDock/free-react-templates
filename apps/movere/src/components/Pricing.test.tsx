import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three pricing tiers with prices', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Transparent, Honest Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Studio / 1BR' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '2-3 Bedrooms' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '4+ Bedrooms' })).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$599')).toBeInTheDocument()
    expect(screen.getByText('$999')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Exact Quote' })).toHaveLength(3)
  })

  it('highlights the 2-3 Bedrooms tier as Most Popular', () => {
    render(<Pricing />)

    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })
})
