import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BuyNow } from './BuyNow'

describe('BuyNow', () => {
  it('renders the section heading', () => {
    render(<BuyNow />)
    expect(screen.getByRole('heading', { name: /buy what/i })).toBeInTheDocument()
  })

  it('renders price badges', () => {
    render(<BuyNow />)
    expect(screen.getAllByText('$0.90').length).toBeGreaterThanOrEqual(1)
  })

  it('renders album titles', () => {
    render(<BuyNow />)
    expect(screen.getByText('Garage Band')).toBeInTheDocument()
    expect(screen.getByText('Jess Parker')).toBeInTheDocument()
  })

  it('renders the Load More button', () => {
    render(<BuyNow />)
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
  })

  it('renders play buttons for albums with hasPlay', () => {
    render(<BuyNow />)
    const playBtns = screen.getAllByRole('button', { name: /play/i })
    expect(playBtns.length).toBeGreaterThanOrEqual(1)
  })
})
