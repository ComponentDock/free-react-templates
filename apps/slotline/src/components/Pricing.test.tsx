import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from '../components/Pricing'
import { pricing } from '../content'

describe('Pricing', () => {
  it('opens on monthly prices with the switch off', () => {
    render(<Pricing />)
    const toggle = screen.getByRole('switch', { name: pricing.switchLabel })
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('$12')).toBeInTheDocument()
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('$89')).toBeInTheDocument()
    expect(screen.getAllByText(pricing.monthlyNote)).toHaveLength(pricing.plans.length)
  })

  it('swaps to annual prices and notes, and back again', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    const toggle = screen.getByRole('switch', { name: pricing.switchLabel })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('$10')).toBeInTheDocument()
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$74')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($120/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($384/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($888/year)')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByText('$12')).toBeInTheDocument()
  })

  it('rings only the featured plan and marks its two grey ✕ features', () => {
    render(<Pricing />)
    expect(screen.getByText(pricing.popular)).toBeInTheDocument()
    const featured = screen.getByText('Studio').closest('div')
    expect(featured?.className).toContain('ring-2')
    const excluded = screen.getAllByText('Google and Instagram booking')
    expect(excluded).toHaveLength(2)
    expect(excluded[0]?.className).toContain('text-gray-400')
    expect(excluded[1]?.className).toContain('text-gray-700')
    expect(screen.getByText('Unlimited bookings').className).toContain('text-gray-700')
    expect(screen.getByText(pricing.save)).toBeInTheDocument()
  })
})
