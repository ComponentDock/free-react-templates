import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Ticker } from './Ticker'

describe('Ticker', () => {
  it('shows stock symbols with prices and percentage changes', () => {
    render(<Ticker />)

    expect(screen.getAllByText('SPY').length).toBeGreaterThan(0)
    expect(screen.getAllByText('$587.42').length).toBeGreaterThan(0)
    expect(screen.getAllByText('+0.72%').length).toBeGreaterThan(0)
    expect(screen.getAllByText('BTC').length).toBeGreaterThan(0)
    expect(screen.getAllByText('$104,892').length).toBeGreaterThan(0)
  })

  it('styles gains green and losses red', () => {
    render(<Ticker />)

    const gains = screen.getAllByText('+0.72%')
    expect(gains[0]!.className).toContain('text-accent')
    const losses = screen.getAllByText('−1.33%')
    expect(losses[0]!.className).toContain('text-danger')
  })

  it('duplicates the quote list for a seamless marquee loop', () => {
    render(<Ticker />)

    const symbols = screen.getAllByText('SPY')
    expect(symbols.length).toBeGreaterThanOrEqual(2)
  })
})
