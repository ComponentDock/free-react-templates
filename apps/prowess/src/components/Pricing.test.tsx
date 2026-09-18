import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the Pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument()
  })

  it('renders the Affordable Plans subtitle', () => {
    render(<Pricing />)
    expect(screen.getByText('Affordable Plans')).toBeInTheDocument()
  })

  it('renders the Beginner tier with Free price', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Beginner' })).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
  })

  it('renders the Pro tier with $29 price', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Pro' })).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
  })

  it('renders the Expert tier with $59 price', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Expert' })).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('renders the Popular badge on the featured plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Gym access (basic)')).toBeInTheDocument()
    expect(screen.getByText('Full gym access')).toBeInTheDocument()
    expect(screen.getByText('Everything in Pro')).toBeInTheDocument()
  })

  it('renders Get Started buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons).toHaveLength(3)
  })

  it('has a section with id="pricing"', () => {
    render(<Pricing />)
    expect(document.getElementById('pricing')).toBeInTheDocument()
  })
})
