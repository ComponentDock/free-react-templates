import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pricing Plans')
  })

  it('renders all three plan names', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()
  })

  it('renders Popular badge on featured plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('Initial Consultation')).toBeInTheDocument()
    expect(screen.getByText('Weekly Sessions')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Sessions')).toBeInTheDocument()
  })

  it('renders Choose Plan buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Choose Plan')
    expect(buttons).toHaveLength(3)
  })
})
