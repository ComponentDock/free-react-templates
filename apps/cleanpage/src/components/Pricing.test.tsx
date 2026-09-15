import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()
  })

  it('renders 4 pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('Startup')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Pricing />)
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('19')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('99')).toBeInTheDocument()
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    const features = screen.getAllByText('All features')
    expect(features).toHaveLength(4)
  })

  it('renders CTA buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(4)
  })
})
