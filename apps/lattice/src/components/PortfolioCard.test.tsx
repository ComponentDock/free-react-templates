import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioCard } from './PortfolioCard'
import type { PortfolioItem } from '../data'

const mockItem: PortfolioItem = {
  id: 1,
  title: 'Work 01',
  category: 'Web Design',
  imageUrl: 'https://picsum.photos/seed/lattice-1/600/400',
}

describe('PortfolioCard', () => {
  it('renders the title and category', () => {
    render(<PortfolioCard item={mockItem} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Work 01')
    expect(screen.getByText('Web Design')).toBeInTheDocument()
  })

  it('renders the image with correct background', () => {
    render(<PortfolioCard item={mockItem} />)
    const imageDiv = screen
      .getByRole('heading', { level: 3 })
      .closest('.group')!
      .querySelector('[style*="background-image"]') as HTMLElement
    expect(imageDiv).toBeTruthy()
    expect(imageDiv.style.backgroundImage).toContain('lattice-1')
  })

  it('renders the title link', () => {
    render(<PortfolioCard item={mockItem} />)
    const link = screen.getByRole('link', { name: /work 01/i })
    expect(link).toHaveAttribute('href', '#')
  })
})
