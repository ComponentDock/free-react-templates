import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2, name: /portfolio/i })).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Portfolio />)
    const tabs = ['All', 'Fashion', 'Lifestyle', 'Natural', 'Wedding']
    tabs.forEach((tab) => {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    })
  })

  it('renders initial items (6 by default)', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('shows Load More button when there are more items', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument()
  })

  it('loads more items when Load More is clicked', () => {
    render(<Portfolio />)
    fireEvent.click(screen.getByRole('button', { name: /load more/i }))
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(6)
  })

  it('filters items when a tab is clicked', () => {
    render(<Portfolio />)
    fireEvent.click(screen.getByRole('button', { name: 'Fashion' }))
    const images = screen.getAllByRole('img')
    // Fashion has 3 items
    expect(images).toHaveLength(3)
  })

  it('shows all items when All tab is clicked', () => {
    render(<Portfolio />)
    fireEvent.click(screen.getByRole('button', { name: 'Fashion' }))
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('renders portfolio item titles', () => {
    render(<Portfolio />)
    const titles = screen.getAllByText('COLORS SPEAK')
    expect(titles.length).toBeGreaterThan(0)
  })

  it('hides Load More when all items are visible', () => {
    render(<Portfolio />)
    // Click Load More until no more
    let loadMore = screen.queryByRole('button', { name: /load more/i })
    while (loadMore) {
      fireEvent.click(loadMore)
      loadMore = screen.queryByRole('button', { name: /load more/i })
    }
    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument()
  })
})
