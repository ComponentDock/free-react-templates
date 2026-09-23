import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrustFeatures } from './TrustFeatures'

describe('TrustFeatures', () => {
  it('renders section heading', () => {
    render(<TrustFeatures />)
    expect(
      screen.getByRole('heading', { name: /why to put trust in law firm/i }),
    ).toBeInTheDocument()
  })

  it('renders all four feature items', () => {
    render(<TrustFeatures />)
    expect(screen.getByText('Expert Attorneys')).toBeInTheDocument()
    expect(screen.getByText('Great Discount')).toBeInTheDocument()
    expect(screen.getByText('Legal Advisory')).toBeInTheDocument()
    expect(screen.getByText('Quick Charges')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<TrustFeatures />)
    expect(screen.getByText(/extensive experience and deep knowledge/)).toBeInTheDocument()
    expect(screen.getByText(/competitive rates and flexible payment/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive legal advisory/)).toBeInTheDocument()
    expect(screen.getByText(/act swiftly to protect/)).toBeInTheDocument()
  })
})
