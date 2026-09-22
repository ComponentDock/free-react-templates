import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()
  })

  it('displays all 4 pricing plans with prices', () => {
    render(<Pricing />)
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('79')).toBeInTheDocument()
    expect(screen.getByText('109')).toBeInTheDocument()
    expect(screen.getByText('149')).toBeInTheDocument()
  })

  it('shows Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: 'Get Started' })
    expect(buttons).toHaveLength(4)
  })

  it('displays plan names', () => {
    render(<Pricing />)
    const standardHeadings = screen.getAllByText('Standard')
    expect(standardHeadings.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
  })

  it('shows feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getAllByText('1 month dedicated training')).toHaveLength(4)
    expect(screen.getAllByText('24/7 phone support')).toHaveLength(4)
  })
})
