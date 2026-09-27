import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders 9 portfolio items', () => {
    render(<PortfolioGrid />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })

  it('renders category labels', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('Smartphone')).toBeInTheDocument()
    expect(screen.getByText('Starlight')).toBeInTheDocument()
    expect(screen.getByText('Bottle')).toBeInTheDocument()
  })

  it('renders type labels', () => {
    render(<PortfolioGrid />)
    expect(screen.getAllByText('Gallery').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Video').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText('Article').length).toBeGreaterThanOrEqual(3)
  })

  it('has responsive grid layout', () => {
    const { container } = render(<PortfolioGrid />)
    const grid = container.querySelector('.grid')
    expect(grid).toBeInTheDocument()
    expect(grid?.className).toContain('sm:grid-cols-2')
    expect(grid?.className).toContain('md:grid-cols-3')
  })
})
