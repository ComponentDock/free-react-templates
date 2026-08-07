import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and the three pricing tiers', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing for All' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Starter' })).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('Max 5 users')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Professional' })).toBeInTheDocument()
    expect(screen.getByText('$72')).toBeInTheDocument()
    expect(screen.getByText('Max 10 users')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Enterprise' })).toBeInTheDocument()
    expect(screen.getByText('$130')).toBeInTheDocument()
    expect(screen.getByText('Unlimited users')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Buy Now' })).toHaveLength(3)
  })
})
