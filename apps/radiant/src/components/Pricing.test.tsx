import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the subtitle, heading, and three pricing plans', () => {
    render(<Pricing />)

    expect(screen.getByText('Pricing for All')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('displays the correct prices', () => {
    render(<Pricing />)

    expect(screen.getByText('$0.00')).toBeInTheDocument()
    expect(screen.getByText('$99.00')).toBeInTheDocument()
    expect(screen.getByText('$180.00')).toBeInTheDocument()
  })

  it('has Get started buttons for each plan', () => {
    render(<Pricing />)

    const buttons = screen.getAllByText('Get started')
    expect(buttons).toHaveLength(3)
  })

  it('lists feature items under each plan', () => {
    render(<Pricing />)

    const features = screen.getAllByText('Basic Support')
    expect(features.length).toBeGreaterThanOrEqual(3)
  })
})
