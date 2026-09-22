import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders the Latest Blog subheading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
  })

  it('renders all 4 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Things To Do Near Hibiscus Hotel')).toBeInTheDocument()
    expect(screen.getByText('A Guide to Local Cuisine in New York')).toBeInTheDocument()
    expect(screen.getByText('Seasonal Events at Hibiscus Hotel')).toBeInTheDocument()
    expect(screen.getByText('Travel Tips for First-Time Visitors')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(4)
  })

  it('renders dates', () => {
    render(<Blog />)
    expect(screen.getByText('September 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 1, 2026')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Top 10 Things To Do Near Hibiscus Hotel')).toBeInTheDocument()
    expect(screen.getByAltText('A Guide to Local Cuisine in New York')).toBeInTheDocument()
    expect(screen.getByAltText('Seasonal Events at Hibiscus Hotel')).toBeInTheDocument()
    expect(screen.getByAltText('Travel Tips for First-Time Visitors')).toBeInTheDocument()
  })
})
