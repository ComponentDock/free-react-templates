import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Choose Your Plan/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pro' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Premium' })).toBeInTheDocument()
  })

  it('shows prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('marks Pro as most popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'Get Started' })
    expect(buttons).toHaveLength(3)
  })
})
