import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DiscountCta } from './DiscountCta'
import { discountItems, discountSection } from '../data'

describe('DiscountCta', () => {
  it('shows the discount headline on the light background with six FREE mini-features', () => {
    const { container } = render(<DiscountCta />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-mist')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Up to 70% Discount/)
    for (const item of discountItems) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: discountSection.button })).toBeInTheDocument()
  })
})
