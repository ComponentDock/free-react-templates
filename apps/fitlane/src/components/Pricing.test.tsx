import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /pricing/i })).toBeInTheDocument()
  })

  it('renders three pricing cards', () => {
    render(<Pricing />)
    const orderButtons = screen.getAllByRole('link', { name: /order plan/i })
    expect(orderButtons.length).toBe(3)
  })

  it('shows the Free plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('1 Day')).toBeInTheDocument()
  })

  it('shows the $29 and $59 plans', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
  })
})
