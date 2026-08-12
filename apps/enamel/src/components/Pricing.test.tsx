import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and four plans with prices and features', () => {
    render(<Pricing />)

    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Pricing' })).toBeInTheDocument()

    for (const plan of ['Basic', 'Standard', 'Premium', 'Platinum']) {
      expect(screen.getByRole('heading', { name: plan })).toBeInTheDocument()
    }
    expect(screen.getByText('$24.50')).toBeInTheDocument()
    expect(screen.getByText('$89.50')).toBeInTheDocument()

    for (const feature of [
      'Diagnostic Services',
      'Professional Consultation',
      'Tooth Implants',
      'Surgical Extractions',
      'Teeth Whitening',
    ]) {
      expect(screen.getAllByText(feature)).toHaveLength(4)
    }

    expect(screen.getAllByRole('link', { name: 'Get Offer' })).toHaveLength(4)
  })
})
