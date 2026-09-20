import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders all 4 plan cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Economy')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Exclusive')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$25')).toBeInTheDocument()
    expect(screen.getByText('$50')).toBeInTheDocument()
    expect(screen.getByText('$75')).toBeInTheDocument()
    expect(screen.getByText('$100')).toBeInTheDocument()
  })

  it('renders Buy Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Buy Now')
    expect(buttons.length).toBe(4)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Coffee Break').length).toBe(4)
    expect(screen.getAllByText('Lunch Facility').length).toBe(4)
  })
})
