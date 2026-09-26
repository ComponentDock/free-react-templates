import { render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders all 9 portfolio items', () => {
    render(<PortfolioGrid />)
    expect(screen.getAllByText('View Portfolio')).toHaveLength(9)
  })

  it('renders the Load more button', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('Load more')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<PortfolioGrid />)
    expect(screen.getAllByText('Portrait').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Nature').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Fashion')).toBeInTheDocument()
    expect(screen.getAllByText('Animals').length).toBeGreaterThanOrEqual(1)
  })

  it('renders portfolio titles', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('Black & Gold Paint Face')).toBeInTheDocument()
    expect(screen.getByText('Green Leaves')).toBeInTheDocument()
    expect(screen.getByText('Turtle')).toBeInTheDocument()
  })

  it('renders images with picsum URLs', () => {
    render(<PortfolioGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(9)
    expect(images[0]).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/lumiere-portrait-1/800/600',
    )
  })

  it('alternates layout direction', () => {
    const { container } = render(<PortfolioGrid />)
    const items = container.querySelectorAll('[class*="flex-col"]')
    expect(items.length).toBeGreaterThanOrEqual(9)
  })
})
