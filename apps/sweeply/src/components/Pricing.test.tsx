import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { describe, expect, it } from 'vitest'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Plans & Pricing')
  })

  it('renders all 4 pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$29.00')).toBeInTheDocument()
    expect(screen.getByText('$59.00')).toBeInTheDocument()
    expect(screen.getByText('$79.00')).toBeInTheDocument()
    expect(screen.getByText('$89.50')).toBeInTheDocument()
  })

  it('renders Sign Up buttons for all plans', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Sign Up')
    expect(buttons.length).toBe(4)
  })
})
