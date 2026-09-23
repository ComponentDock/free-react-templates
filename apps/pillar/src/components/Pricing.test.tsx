import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()
  })

  it('renders three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Starter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Enterprise' })).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
  })

  it('renders Buy Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: 'Buy Now' })
    expect(buttons.length).toBe(3)
  })
})
