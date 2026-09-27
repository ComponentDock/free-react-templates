import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders all four pricing plans', () => {
    render(<Pricing />)

    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Startup')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<Pricing />)

    // Each plan shows its price number
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('19')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('99')).toBeInTheDocument()
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)

    const features = screen.getAllByText('All features')
    expect(features.length).toBeGreaterThanOrEqual(4)
  })
})
