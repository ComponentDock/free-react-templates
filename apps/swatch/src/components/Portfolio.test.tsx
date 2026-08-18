import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'
import { portfolioItems } from '../data'

describe('Portfolio', () => {
  it('renders the heading and six image tiles with title and category captions', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'My Latest Work' })).toBeInTheDocument()

    const figures = screen.getAllByRole('figure')
    expect(figures).toHaveLength(6)

    for (const item of portfolioItems) {
      const image = screen.getByAltText(item.title)
      expect(image).toHaveAttribute('loading', 'lazy')
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }

    expect(screen.getAllByText('Web Design')).toHaveLength(6)
  })
})
