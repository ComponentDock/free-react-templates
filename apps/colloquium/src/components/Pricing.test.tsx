import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument()
  })

  it('renders all pricing cards', () => {
    render(<Pricing />)
    expect(screen.getAllByTestId('pricing-card')).toHaveLength(3)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Get Started')).toHaveLength(3)
  })

  it('renders Popular badge on Standard plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders plan features', () => {
    render(<Pricing />)
    expect(screen.getByText('1 Day Conference')).toBeInTheDocument()
    expect(screen.getByText('All Day Conference')).toBeInTheDocument()
    expect(screen.getByText('Workshop Access')).toBeInTheDocument()
  })
})
