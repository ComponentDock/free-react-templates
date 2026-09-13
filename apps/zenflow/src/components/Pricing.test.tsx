import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
  })

  it('renders all three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('renders pricing amounts', () => {
    render(<Pricing />)
    expect(screen.getByText('$9.99')).toBeInTheDocument()
    expect(screen.getByText('$19.99')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('renders Buy It Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Buy It Now')
    expect(buttons.length).toBe(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('5 GB Storage')).toBeInTheDocument()
    expect(screen.getByText('25 GB Storage')).toBeInTheDocument()
    expect(screen.getByText('100 GB Storage')).toBeInTheDocument()
  })
})
