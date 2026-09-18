import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ICOLive } from './ICOLive'

describe('ICOLive', () => {
  it('shows ICO stats, countdown, and buy button', () => {
    render(<ICOLive />)
    expect(screen.getByRole('heading', { name: /ICO.*Live Now/i })).toBeInTheDocument()
    expect(screen.getByText('Token Sold')).toBeInTheDocument()
    expect(screen.getByText('126,419,796')).toBeInTheDocument()
    expect(screen.getByText('ETH collected')).toBeInTheDocument()
    expect(screen.getByText('BTC collected')).toBeInTheDocument()
    expect(screen.getByText('LTH collected')).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
    expect(screen.getByText('Soft Cap')).toBeInTheDocument()
    expect(screen.getByText('Max Cap')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy Tokens' })).toBeInTheDocument()
  })
})
