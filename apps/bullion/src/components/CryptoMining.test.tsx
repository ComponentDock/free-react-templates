import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CryptoMining } from './CryptoMining'
import { miningCards, miningNewsTitle, viewMoreLabel } from '../data'

describe('CryptoMining', () => {
  it('renders the title, five cards and the bordered view-more button', () => {
    render(<CryptoMining />)

    expect(screen.getByRole('heading', { name: miningNewsTitle })).toBeInTheDocument()

    for (const card of miningCards) {
      expect(screen.getByRole('heading', { name: card.headline })).toBeInTheDocument()
      expect(screen.getAllByText(card.author).length).toBeGreaterThan(0)
      expect(screen.getByText(card.views)).toBeInTheDocument()
    }

    const button = screen.getByRole('link', { name: new RegExp(viewMoreLabel, 'i') })
    expect(button).toHaveClass('h-[45px]', 'rounded-[2px]', 'border-accent', 'text-accent')
    expect(button).toHaveClass('hover:bg-accent', 'hover:text-black')
  })
})
