import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section title', () => {
    render(<Pricing />)
    expect(screen.getByText(/choose your plan/i)).toBeInTheDocument()
  })

  it('renders the subtitle label', () => {
    render(<Pricing />)
    expect(screen.getByText(/membership plans/i)).toBeInTheDocument()
  })

  it('renders all 3 plan names', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
  })

  it('renders correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('renders the Popular badge on Premium plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Popular')).toBeInTheDocument()
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons.length).toBe(3)
  })

  it('has the pricing section id', () => {
    const { container } = render(<Pricing />)
    expect(container.querySelector('#pricing')).toBeInTheDocument()
  })

  it('renders plan features', () => {
    render(<Pricing />)
    expect(screen.getByText('Access to gym floor')).toBeInTheDocument()
    expect(screen.getByText('Personal trainer (2x/week)')).toBeInTheDocument()
    expect(screen.getByText('Group classes')).toBeInTheDocument()
  })
})
