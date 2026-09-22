import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders three pricing cards with features', () => {
    render(<Pricing />)
    expect(screen.getByText('6 Months')).toBeInTheDocument()
    expect(screen.getByText('12 Months')).toBeInTheDocument()
    expect(screen.getByText('3 Months')).toBeInTheDocument()
    expect(screen.getAllByText('$30').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('$25').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('$40').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Join Now buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /join now/i })
    expect(buttons).toHaveLength(3)
  })

  it('renders feature checkmarks', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Free Riding')).toHaveLength(3)
    expect(screen.getAllByText('Personal Trainer')).toHaveLength(3)
  })
})
