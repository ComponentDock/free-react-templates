import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('shows the headline, sub-line and lime consultation button', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { name: 'We Provide Free Dental Care Consultation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Your Health is Our Top Priority with Comprehensive, Affordable medical.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Free Consultation' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
