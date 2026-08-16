import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { pricing, pricingPlans } from '../data'

describe('Pricing', () => {
  it('shows the heading, Yearly/Monthly tabs and three cards with orange CTAs', () => {
    render(<Pricing />)

    expect(screen.getByText(pricing.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: pricing.heading })).toBeInTheDocument()

    const yearly = screen.getByRole('button', { name: 'Yearly' })
    const monthly = screen.getByRole('button', { name: 'Monthly' })
    expect(yearly).toHaveAttribute('aria-pressed', 'true')
    expect(monthly).toHaveAttribute('aria-pressed', 'false')

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    for (const plan of pricingPlans) {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
      expect(screen.getAllByText(plan.price).length).toBeGreaterThanOrEqual(1)
      for (const feature of plan.features) {
        expect(screen.getAllByText(feature).length).toBeGreaterThanOrEqual(1)
      }
    }

    const cta = screen.getAllByRole('link', { name: pricing.ctaLabel })
    expect(cta).toHaveLength(3)
    expect(cta[0]).toHaveAttribute('href', '#contact')
    expect(cta[0]!.className).toMatch(/bg-orange/)
  })

  it('swaps the active tab when the user clicks Monthly', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const yearly = screen.getByRole('button', { name: 'Yearly' })
    const monthly = screen.getByRole('button', { name: 'Monthly' })

    await user.click(monthly)
    expect(monthly).toHaveAttribute('aria-pressed', 'true')
    expect(yearly).toHaveAttribute('aria-pressed', 'false')
    // Both panes keep the same card set (demo parity).
    expect(screen.getAllByRole('article')).toHaveLength(3)

    await user.click(yearly)
    expect(yearly).toHaveAttribute('aria-pressed', 'true')
    expect(monthly).toHaveAttribute('aria-pressed', 'false')
  })
})
