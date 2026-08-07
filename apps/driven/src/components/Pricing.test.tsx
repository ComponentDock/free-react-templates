import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, blurb, and three business plans with prices', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Simple Pricing' })).toBeInTheDocument()

    const plans = screen.getAllByRole('heading', { level: 3, name: 'Business' })
    expect(plans).toHaveLength(3)

    expect(screen.getByText('$50.00')).toBeInTheDocument()
    expect(screen.getByText('$60.00')).toBeInTheDocument()
    expect(screen.getByText('$80.00')).toBeInTheDocument()
  })

  it('lists the plan features and a Choose Plan button per plan', () => {
    render(<Pricing />)

    for (const feature of [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ]) {
      expect(screen.getAllByText(feature)).toHaveLength(3)
    }

    expect(screen.getAllByRole('link', { name: 'Choose Plan' })).toHaveLength(3)
  })
})
