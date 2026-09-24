import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNewsTicker } from './LatestNewsTicker'
import { latestTickerHeadlines } from '../data'

describe('LatestNewsTicker', () => {
  it('renders the Latest label', () => {
    render(<LatestNewsTicker />)
    expect(screen.getAllByText('Latest').length).toBeGreaterThan(0)
  })

  it('renders all headline timestamps and texts', () => {
    render(<LatestNewsTicker />)
    for (const item of latestTickerHeadlines) {
      expect(screen.getByText(item.time)).toBeInTheDocument()
      expect(screen.getAllByText(item.text).length).toBeGreaterThan(0)
    }
  })
})
