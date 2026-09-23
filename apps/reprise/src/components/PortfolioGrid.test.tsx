import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders all 9 portfolio items', () => {
    render(<PortfolioGrid />)
    const items = [
      'SMARTPHONE',
      'BOOK',
      'DOODLE',
      'FOSTER',
      'STARLIGHT',
      'OPEN BOOK',
      'BURGER',
      'PRINTSCREEN',
      'BOTTLE',
    ]
    for (const cat of items) {
      expect(screen.getAllByText(cat).length).toBeGreaterThan(0)
    }
  })

  it('renders content type labels', () => {
    render(<PortfolioGrid />)
    expect(screen.getAllByText('GALLERY').length).toBeGreaterThan(0)
    expect(screen.getAllByText('VIDEO').length).toBeGreaterThan(0)
    expect(screen.getAllByText('ARTICLE').length).toBeGreaterThan(0)
  })

  it('renders images with alt text', () => {
    render(<PortfolioGrid />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(9)
    for (const img of imgs) {
      expect(img).toHaveAttribute('alt')
    }
  })

  it('renders links for each portfolio item', () => {
    render(<PortfolioGrid />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(9)
  })
})
