import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'
import { portfolioItems } from '../data'

describe('Portfolio', () => {
  it('renders all portfolio items with unique images and titles', () => {
    render(<Portfolio />)
    for (const item of portfolioItems) {
      const img = screen.getByRole('img', { name: item.title })
      expect(img).toHaveAttribute('src', expect.stringContaining(item.seed))
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
  })

  it('renders the correct number of portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(portfolioItems.length)
  })

  it('renders portfolio categories', () => {
    render(<Portfolio />)
    const categories = screen.getAllByText('Landscape')
    expect(categories.length).toBe(portfolioItems.length)
  })
})
