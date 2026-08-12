import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Pricing plans/i })).toBeInTheDocument()
  })

  it('renders pricing cards with name, price, features and a Choose Plane button', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Silver Package' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Gold Package' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Platinum Package' })).toBeInTheDocument()
    expect(screen.getByText('$50.00')).toBeInTheDocument()
    expect(screen.getByText('$60.00')).toBeInTheDocument()
    expect(screen.getByText('$80.00')).toBeInTheDocument()
    expect(screen.getByText('2GB Bandwidth')).toBeInTheDocument()
    expect(screen.getByText('Two Account')).toBeInTheDocument()
    expect(screen.getByText('15GB Storage')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Choose Plane' })).toHaveLength(3)
  })
})
