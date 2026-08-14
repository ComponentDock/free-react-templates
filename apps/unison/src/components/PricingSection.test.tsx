import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingSection } from './PricingSection'

describe('PricingSection', () => {
  it('renders three plans with big blue prices and / year suffixes', () => {
    render(<PricingSection />)
    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()

    for (const plan of [
      ['Basic', '$47'],
      ['Premium', '$200'],
      ['Professional', '$599'],
    ]) {
      expect(screen.getByRole('heading', { name: plan[0] })).toBeInTheDocument()
      const price = screen.getByText(plan[1]!)
      expect(price).toHaveClass('text-brand', 'text-5xl')
      expect(screen.getAllByText('/ year').length).toBe(3)
    }

    const buyButtons = screen.getAllByRole('button', { name: 'Buy Now' })
    expect(buyButtons).toHaveLength(3)
  })

  it('marks included features with a green check and excluded ones struck through', () => {
    render(<PricingSection />)
    const premium = screen.getByRole('heading', { name: 'Premium' }).closest('article')!

    const included = premium.querySelector('li span')!
    expect(included).toHaveClass('text-check')
    expect(included.textContent).toBe('Everything in Basic')

    const excluded = premium.querySelector('li[data-excluded="true"]')!
    expect(excluded).toHaveClass('line-through', 'text-excluded')
    expect(excluded.textContent).toBe('Priority phone support')
  })
})
