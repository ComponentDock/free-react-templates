import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DiscountBand, discountChecks } from './DiscountBand'

describe('DiscountBand', () => {
  it('shows the discount heading, checklist lines, and member CTA', () => {
    render(<DiscountBand />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Pay now and get a 25% Discount/,
    )
    expect(screen.getByText('Discount')).toBeInTheDocument()
    for (const line of discountChecks) {
      expect(screen.getByText(line)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Become a Member' })).toHaveAttribute('href', '#')
  })
})
