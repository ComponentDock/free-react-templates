import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders four monthly tier cards with navy price bands and feature lists', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Choose your plan')
    expect(screen.getAllByRole('article')).toHaveLength(4)
    const tiers: Array<[string, string]> = [
      ['Started', '$15.90'],
      ['Business', '$25.90'],
      ['Premium', '$35.90'],
      ['Dedicated', '$45.90'],
    ]
    for (const [tier, price] of tiers) {
      expect(screen.getByRole('heading', { level: 3, name: tier })).toBeInTheDocument()
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getAllByText('/ month')).toHaveLength(4)
    expect(screen.getByText('2.5 GB web space')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Choose plan' })).toHaveLength(4)
  })

  it('exposes the billing toggle as a labelled radiogroup', () => {
    render(<Pricing />)
    expect(screen.getByRole('radiogroup', { name: 'Billing period' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Monthly' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Yearly' })).not.toBeChecked()
  })

  it('swaps the plan set when Yearly is chosen and back again', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    await user.click(screen.getByRole('radio', { name: 'Yearly' }))
    expect(screen.getByRole('radio', { name: 'Yearly' })).toBeChecked()
    expect(screen.getByText('30 GB web space')).toBeInTheDocument()
    expect(screen.getByText('1 TB web space')).toBeInTheDocument()
    expect(screen.queryByText('2.5 GB web space')).not.toBeInTheDocument()
    expect(screen.getAllByText('/ year')).toHaveLength(4)

    await user.click(screen.getByRole('radio', { name: 'Monthly' }))
    expect(screen.getByText('2.5 GB web space')).toBeInTheDocument()
    expect(screen.getAllByText('/ month')).toHaveLength(4)
  })
})
