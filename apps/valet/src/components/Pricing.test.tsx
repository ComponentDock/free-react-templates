import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders heading and four pricing cards', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Price & Plans').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$109')).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()
  })

  it('renders plan names and Get Started buttons', () => {
    render(<Pricing />)
    expect(screen.getByText('Small Plan')).toBeInTheDocument()
    expect(screen.getByText('Startup Plan')).toBeInTheDocument()
    expect(screen.getByText('Medium Plan')).toBeInTheDocument()
    expect(screen.getByText('Commercial Plan')).toBeInTheDocument()
    const ctaButtons = screen.getAllByText('Get Started')
    expect(ctaButtons).toHaveLength(4)
  })
})
