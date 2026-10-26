import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PlanPrice } from './PlanPrice'

describe('PlanPrice', () => {
  it('keeps the amount and the unit in one baseline row', () => {
    const { container } = render(<PlanPrice amount="$12" unit="per seat / month" />)

    const row = container.querySelector('p')
    expect(row).toHaveClass('plan-price')
    expect(row?.children).toHaveLength(2)
  })

  it('renders the amount as its own span so the 48px ladder is untouched', () => {
    const { container } = render(<PlanPrice amount="$29" unit="per seat / month" />)

    const amount = container.querySelector('.plan-amount')
    expect(amount).toHaveTextContent('$29')
    expect(amount?.tagName).toBe('SPAN')
  })

  it('keeps the unit verbatim — spaces around the slash, no abbreviated /mo', () => {
    render(<PlanPrice amount="$59" unit="per seat / month" />)

    expect(screen.getByText('per seat / month')).toHaveClass('plan-per')
    expect(screen.queryByText(/\/mo\b/)).toBeNull()
  })
})
