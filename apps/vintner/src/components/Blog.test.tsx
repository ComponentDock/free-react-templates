import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading, sub-line, and view-all link', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: "Wine's Blog" })).toBeInTheDocument()
    expect(screen.getByText(/notes from the cellar/i)).toBeInTheDocument()
    const viewAll = screen.getByRole('link', { name: /View All Products/ })
    expect(viewAll).toHaveAttribute('href', '#wines')
  })

  it('renders three post cards with photo, title, excerpt, and meta', () => {
    const { container } = render(<Blog />)
    expect(container.querySelectorAll('[data-post]')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
    for (const title of [
      'What You Need To Know About Premium Rosé',
      'Five Food Pairings For A Cellar Dinner',
      'Inside The Harvest: A Weekend In The Vines',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Dave Rogers in/)).toHaveLength(3)
    expect(screen.getAllByText('News').length).toBeGreaterThan(0)
  })
})
