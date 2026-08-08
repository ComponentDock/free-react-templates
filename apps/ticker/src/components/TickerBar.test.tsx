import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TickerBar } from './TickerBar'

describe('TickerBar', () => {
  it('renders a scrolling list of at least six market prices with symbols, prices and changes', () => {
    render(<TickerBar />)

    const list = screen.getByRole('list', { name: 'Live market prices' })
    // Each item is rendered twice for the seamless marquee loop.
    expect(within(list).getAllByRole('listitem')).toHaveLength(12)

    const symbols = ['BTC', 'ETH', 'SPY', 'EUR/USD', 'XAU/USD', 'TSLA']
    for (const symbol of symbols) {
      expect(within(list).getAllByText(symbol).length).toBeGreaterThan(0)
    }
  })

  it('colors positive changes green and negative changes red', () => {
    render(<TickerBar />)

    const positives = screen.getAllByText('+2.4%')
    for (const el of positives) {
      expect(el).toHaveClass('text-success-500')
      expect(el).toHaveClass('dark:text-success-400')
    }

    const negatives = screen.getAllByText('-1.5%')
    for (const el of negatives) {
      expect(el).toHaveClass('text-danger-500')
    }
  })

  it('renders prices in monospace', () => {
    render(<TickerBar />)

    const price = screen.getAllByText('$67,423')[0]!
    expect(price).toHaveClass('font-mono')
  })
})
