import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroMosaic } from './HeroMosaic'
import { featuredArticles } from '../data'

describe('HeroMosaic', () => {
  it('renders all six stories with headlines and meta', () => {
    render(<HeroMosaic />)

    for (const article of featuredArticles) {
      expect(screen.getByText(article.headline)).toBeInTheDocument()
    }

    const big = featuredArticles[0]
    expect(screen.getAllByText(big.author).length).toBeGreaterThan(0)
    expect(screen.getAllByText(big.date).length).toBeGreaterThan(0)
    expect(screen.getByText(big.views)).toBeInTheDocument()
    expect(screen.getByText(big.comments)).toBeInTheDocument()

    const grid = screen.getByText(big.headline).closest('div')!.parentElement!.parentElement!
    expect(grid).toHaveClass('lg:h-[600px]')
  })
})
