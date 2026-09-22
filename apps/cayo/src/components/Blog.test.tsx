import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders the Latest News subheading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all 3 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Things To Do Near Cayo Hotel')).toBeInTheDocument()
    expect(screen.getByText('A Guide to Local Cuisine in the Caribbean')).toBeInTheDocument()
    expect(screen.getByText('Seasonal Events at Cayo Hotel')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders dates', () => {
    render(<Blog />)
    expect(screen.getByText('September 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('September 5, 2026')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Top 10 Things To Do Near Cayo Hotel')).toBeInTheDocument()
    expect(screen.getByAltText('A Guide to Local Cuisine in the Caribbean')).toBeInTheDocument()
    expect(screen.getByAltText('Seasonal Events at Cayo Hotel')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Blog />)
    const adminLabels = screen.getAllByText('By Admin')
    expect(adminLabels).toHaveLength(3)
  })

  it('renders comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('3 Comments')).toBeInTheDocument()
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
    expect(screen.getByText('2 Comments')).toBeInTheDocument()
  })
})
