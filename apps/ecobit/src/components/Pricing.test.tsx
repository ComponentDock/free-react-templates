import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, all four plans with prices, features, and purchase buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Simple Pricing' })).toBeInTheDocument()

    for (const plan of ['Standard', 'Business', 'Premium', 'Ultimate']) {
      expect(screen.getByRole('heading', { level: 3, name: plan })).toBeInTheDocument()
    }

    expect(screen.getAllByText('$50.00')).toHaveLength(2)
    expect(screen.getByText('$60.00')).toBeInTheDocument()
    expect(screen.getByText('$80.00')).toBeInTheDocument()

    for (const feature of [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ]) {
      expect(screen.getAllByText(feature)).toHaveLength(4)
    }

    expect(screen.getAllByRole('button', { name: 'Purchase Now' })).toHaveLength(4)
  })
})
