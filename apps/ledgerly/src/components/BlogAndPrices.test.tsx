import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogAndPrices } from './BlogAndPrices'

describe('BlogAndPrices', () => {
  it('renders blog post titles', () => {
    render(<BlogAndPrices />)
    expect(screen.getByText('This Platform Aims to Disrupt the Market')).toBeInTheDocument()
    expect(screen.getByText('New Hedge Fund Invests in Crypto')).toBeInTheDocument()
    expect(screen.getByText('DeFi Growth Reaches New Heights')).toBeInTheDocument()
  })

  it('renders cryptocurrency prices', () => {
    render(<BlogAndPrices />)
    expect(screen.getByText('Bitcoin')).toBeInTheDocument()
    expect(screen.getByText('Ethereum')).toBeInTheDocument()
    expect(screen.getByText('Solana')).toBeInTheDocument()
  })

  it('renders price change indicators', () => {
    render(<BlogAndPrices />)
    const increases = screen.getAllByText('$64,256.78')
    expect(increases.length).toBe(1)
    expect(increases[0]).toHaveClass('text-green-500')
  })
})
