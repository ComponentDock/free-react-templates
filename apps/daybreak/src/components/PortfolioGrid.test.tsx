import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders all 6 portfolio items by default', () => {
    render(<PortfolioGrid />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(6)
  })

  it('displays the correct labels', () => {
    render(<PortfolioGrid />)
    for (const label of ['CLOCK', 'BAG', 'FISH', 'BOTTLE', 'PAPER', 'BLUE ICE']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('filters items by category', () => {
    render(<PortfolioGrid activeFilter="Image" />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(1)
    expect(screen.getByText('BAG')).toBeInTheDocument()
  })

  it('shows all items when filter is All', () => {
    render(<PortfolioGrid activeFilter="All" />)
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
  })

  it('renders images with picsum.photos src', () => {
    render(<PortfolioGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    for (const img of images) {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/')
    }
  })
})
