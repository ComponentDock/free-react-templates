import { render, screen } from '@testing-library/react'
import { BrowseCategories } from './BrowseCategories'

describe('BrowseCategories', () => {
  it('renders the heading', () => {
    render(<BrowseCategories />)
    expect(screen.getByText('Browse Categories')).toBeInTheDocument()
  })

  it('renders all category names', () => {
    render(<BrowseCategories />)
    expect(screen.getByText('Automotive')).toBeInTheDocument()
    expect(screen.getByText('Beauty & Spa')).toBeInTheDocument()
    expect(screen.getByText('Hotel')).toBeInTheDocument()
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Fitness')).toBeInTheDocument()
    expect(screen.getByText('Health')).toBeInTheDocument()
    expect(screen.getByText('Shopping')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
  })

  it('renders category links', () => {
    render(<BrowseCategories />)
    const links = screen.getAllByRole('link')
    const categoryLinks = links.filter((l) => l.getAttribute('href') === '#')
    expect(categoryLinks.length).toBeGreaterThanOrEqual(8)
  })

  it('applies custom className', () => {
    const { container } = render(<BrowseCategories className="custom-browse" />)
    expect(container.firstChild).toHaveClass('custom-browse')
  })
})
