import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('See Our Daily News & Updates')).toBeInTheDocument()
  })

  it('renders 2 blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('How to List Your Property')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Hidden Gems in the City')).toBeInTheDocument()
  })

  it('displays author and date metadata', () => {
    render(<Blog />)
    expect(screen.getByText(/by Theresa Winston/)).toBeInTheDocument()
    expect(screen.getByText(/Jan 18, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/by Mark Stevens/)).toBeInTheDocument()
    expect(screen.getByText(/Jan 12, 2026/)).toBeInTheDocument()
  })

  it('displays category links', () => {
    render(<Blog />)
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Guides')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('How to List Your Property')).toBeInTheDocument()
    expect(screen.getByAltText('Top 10 Hidden Gems in the City')).toBeInTheDocument()
  })

  it('renders excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Learn the best practices/)).toBeInTheDocument()
    expect(screen.getByText(/Discover the most underrated spots/)).toBeInTheDocument()
  })
})
