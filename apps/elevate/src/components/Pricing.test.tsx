import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /pricing plans/i })).toBeInTheDocument()
  })

  it('renders all three pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /basic/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /standard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /premium/i })).toBeInTheDocument()
  })

  it('shows the Most Popular badge on Standard plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders pricing amounts', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('renders features for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('1 Coaching Session/mo')).toBeInTheDocument()
    expect(screen.getByText('4 Coaching Sessions/mo')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Sessions')).toBeInTheDocument()
  })

  it('renders Get Started buttons for all plans', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: /get started/i })
    expect(buttons).toHaveLength(3)
  })
})
