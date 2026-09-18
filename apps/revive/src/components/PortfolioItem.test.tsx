import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PortfolioItem } from './PortfolioItem'

describe('PortfolioItem', () => {
  const defaultProps = {
    title: 'Test Title',
    category: 'Test Category',
    imageSrc: 'https://example.com/image.jpg',
    hoverImageSrc: 'https://example.com/hover.jpg',
    views: 100,
    downloads: 50,
    likes: 25,
    size: 'full' as const,
  }

  it('renders title and category', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Category')).toBeInTheDocument()
  })

  it('renders view and download counts', () => {
    render(<PortfolioItem {...defaultProps} />)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('applies full width class', () => {
    const { container } = render(<PortfolioItem {...defaultProps} />)
    expect(container.firstChild).toHaveClass('w-full')
  })

  it('applies half width class', () => {
    const { container } = render(<PortfolioItem {...defaultProps} size="half" />)
    expect(container.firstChild).toHaveClass('w-full')
  })

  it('applies quarter width class', () => {
    const { container } = render(<PortfolioItem {...defaultProps} size="quarter" />)
    expect(container.firstChild).toHaveClass('w-full')
  })

  it('renders main image', () => {
    render(<PortfolioItem {...defaultProps} />)
    const img = screen.getByRole('img', { name: 'Test Title' })
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('renders hover image', () => {
    const { container } = render(<PortfolioItem {...defaultProps} />)
    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBeGreaterThanOrEqual(2)
    expect(imgs[1]).toHaveAttribute('src', 'https://example.com/hover.jpg')
  })
})
