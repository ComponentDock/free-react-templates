import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HotDeals } from './HotDeals'

describe('HotDeals', () => {
  it('renders two deal cards with headings', () => {
    render(<HotDeals />)
    const headings = screen.getAllByRole('heading', { name: 'Hot Deals of this Month' })
    expect(headings).toHaveLength(2)
  })

  it('renders "shop now" text for each deal', () => {
    render(<HotDeals />)
    const shopNow = screen.getAllByText(/shop now/i)
    expect(shopNow).toHaveLength(2)
  })
})
