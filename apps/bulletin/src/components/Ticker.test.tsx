import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Ticker } from './Ticker'
import { tickerHeadlines, tickerLabel } from '../data'

describe('Ticker', () => {
  it('shows the Trending label and scrolls the headline links', () => {
    const { container } = render(<Ticker />)

    expect(screen.getByText(tickerLabel)).toBeInTheDocument()
    for (const headline of tickerHeadlines) {
      expect(screen.getAllByText(headline).length).toBeGreaterThan(0)
    }
    // Headlines are duplicated for the seamless marquee loop.
    expect(screen.getAllByText(tickerHeadlines[0]!).length).toBe(2)
    expect(container.querySelector('.animate-ticker')).not.toBeNull()
  })
})
