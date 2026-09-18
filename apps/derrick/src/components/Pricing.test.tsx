import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders all three plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic Plan')).toBeInTheDocument()
    expect(screen.getByText('Standard Plan')).toBeInTheDocument()
    expect(screen.getByText('Premium Plan')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    const prices = screen.getAllByText('$29')
    expect(prices).toHaveLength(3)
  })

  it('renders "per month" labels', () => {
    render(<Pricing />)
    const labels = screen.getAllByText('per month')
    expect(labels).toHaveLength(3)
  })

  it('renders get started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get started')
    expect(buttons).toHaveLength(3)
  })

  it('has the pricing section id', () => {
    render(<Pricing />)
    expect(document.getElementById('pricing')).toBeInTheDocument()
  })
})
