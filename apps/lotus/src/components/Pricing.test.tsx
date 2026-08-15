import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and three pricing cards with price, per-class label, and book button', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Pricing Plan' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Yoga Program' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dance program' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fitness Program' })).toBeInTheDocument()
    expect(screen.getByText('$7.5')).toBeInTheDocument()
    expect(screen.getByText('$12.5')).toBeInTheDocument()
    expect(screen.getByText('$19')).toBeInTheDocument()
    expect(screen.getAllByText('per class')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Book now' })).toHaveLength(3)
  })
})
