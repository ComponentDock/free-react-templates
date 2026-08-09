import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { estimatePrice, QuoteCalculator } from './QuoteCalculator'

describe('estimatePrice', () => {
  it('returns the demo default of $315 for House / 1500 sq ft / 3 bedrooms / One-Time', () => {
    expect(estimatePrice('House', 1500, 3, 'One-Time')).toBe(315)
  })

  it('applies the property type factor', () => {
    expect(estimatePrice('Office', 1500, 3, 'One-Time')).toBe(378)
    expect(estimatePrice('Apartment', 1500, 3, 'One-Time')).toBe(284)
  })

  it('applies the frequency discount factor', () => {
    expect(estimatePrice('House', 1500, 3, 'Weekly')).toBe(236)
    expect(estimatePrice('House', 1500, 3, 'Monthly')).toBe(189)
  })

  it('responds to size and bedroom changes', () => {
    expect(estimatePrice('House', 1000, 3, 'One-Time')).toBe(225)
    expect(estimatePrice('House', 1500, 4, 'One-Time')).toBe(330)
  })
})

describe('QuoteCalculator', () => {
  it('renders all inputs with the demo defaults', () => {
    render(<QuoteCalculator />)

    expect(screen.getByLabelText('Property Type')).toHaveValue('House')
    expect(screen.getByText('1500 sq ft')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Estimated Price')).toBeInTheDocument()
    expect(screen.getByText('$315')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('shows the frequency toggle with One-Time selected', () => {
    render(<QuoteCalculator />)
    for (const option of ['One-Time', 'Weekly', 'Bi-Weekly', 'Monthly']) {
      expect(screen.getByRole('button', { name: option })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'One-Time' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Weekly' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('updates the price when the property type changes', async () => {
    const user = userEvent.setup()
    render(<QuoteCalculator />)

    await user.selectOptions(screen.getByLabelText('Property Type'), 'Office')
    expect(screen.getByText('$378')).toBeInTheDocument()
  })

  it('updates the price when the home size changes', () => {
    render(<QuoteCalculator />)

    fireEvent.change(screen.getByLabelText('Home Size'), { target: { value: '2000' } })
    expect(screen.getByText('2000 sq ft')).toBeInTheDocument()
    expect(screen.getByText('$405')).toBeInTheDocument()
  })

  it('updates the price when the frequency changes', async () => {
    const user = userEvent.setup()
    render(<QuoteCalculator />)

    await user.click(screen.getByRole('button', { name: 'Weekly' }))
    expect(screen.getByRole('button', { name: 'Weekly' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('$236')).toBeInTheDocument()
  })

  it('steps bedrooms and disables the minus button at zero', async () => {
    const user = userEvent.setup()
    render(<QuoteCalculator />)

    await user.click(screen.getByRole('button', { name: 'Increase bedrooms' }))
    expect(screen.getByText('4')).toBeInTheDocument()

    for (let index = 0; index < 4; index += 1) {
      await user.click(screen.getByRole('button', { name: 'Decrease bedrooms' }))
    }
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decrease bedrooms' })).toBeDisabled()
  })
})
