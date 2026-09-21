import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Pricing Plans/i })).toBeInTheDocument()
  })

  it('renders all four pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Beginner/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Intermediate/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Advanced/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Professional/i })).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$159')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
  })

  it('renders Get Started buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: /Get Started/i })
    expect(buttons).toHaveLength(4)
  })
})
