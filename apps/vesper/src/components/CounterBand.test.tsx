import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CounterBand } from './CounterBand'

describe('CounterBand', () => {
  it('renders four statistics with labels and values', () => {
    render(<CounterBand />)

    expect(screen.getByRole('heading', { name: 'Our Church in Numbers' })).toBeInTheDocument()

    for (const [label, value] of [
      ['Members', '2,500'],
      ['Pastors', '45'],
      ['Donation', '$1,240,000'],
      ['Churches', '120'],
    ] as const) {
      expect(screen.getByText(label)).toBeInTheDocument()
      expect(screen.getByText(value)).toBeInTheDocument()
    }
  })
})
