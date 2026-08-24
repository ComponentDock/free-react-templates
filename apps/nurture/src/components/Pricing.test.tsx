import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pricing')
  })

  it('renders all 3 pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Infant')).toBeInTheDocument()
    expect(screen.getByText('Toddler')).toBeInTheDocument()
    expect(screen.getByText('Lad')).toBeInTheDocument()
  })

  it('renders prices for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Early learning activities')).toBeInTheDocument()
    expect(screen.getByText('Structured curriculum')).toBeInTheDocument()
    expect(screen.getByText('Full-day programs')).toBeInTheDocument()
  })

  it('renders Get Started buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(3)
  })
})
