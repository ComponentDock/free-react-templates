import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedLogos } from './FeaturedLogos'

describe('FeaturedLogos', () => {
  it('shows partner logos heading and logo names', () => {
    render(<FeaturedLogos />)
    expect(screen.getByText('We are featured in')).toBeInTheDocument()
    expect(screen.getByText('CryptoNews')).toBeInTheDocument()
    expect(screen.getByText('BlockFin')).toBeInTheDocument()
    expect(screen.getByText('CoinDesk')).toBeInTheDocument()
    expect(screen.getByText('TokenHub')).toBeInTheDocument()
    expect(screen.getByText('DeFi Pro')).toBeInTheDocument()
    expect(screen.getByText('ChainLink')).toBeInTheDocument()
  })
})
