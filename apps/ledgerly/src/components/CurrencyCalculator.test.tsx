import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CurrencyCalculator } from './CurrencyCalculator'

describe('CurrencyCalculator', () => {
  it('renders the section heading', () => {
    render(<CurrencyCalculator />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Cryptocurrency Calculator')
  })

  it('renders currency conversion forms with inputs and selects', () => {
    render(<CurrencyCalculator />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toBeGreaterThanOrEqual(4)

    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(4)

    expect(screen.getAllByText('=')).toHaveLength(2)
  })
})
