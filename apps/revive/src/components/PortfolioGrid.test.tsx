import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders portfolio items', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('Photoshop PSD Notebook MockUp')).toBeInTheDocument()
    expect(screen.getByText('Peue Business Card Mockup Sample')).toBeInTheDocument()
    expect(screen.getByText('Colorful Icon Set Collection')).toBeInTheDocument()
  })

  it('renders the grid container', () => {
    const { container } = render(<PortfolioGrid />)
    expect(container.querySelector('.bg-bg-light')).toBeInTheDocument()
  })

  it('renders multiple items', () => {
    render(<PortfolioGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(7)
  })
})
