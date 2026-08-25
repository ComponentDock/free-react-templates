import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Blog')
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Best Hotel Near Beach in Hawaii')).toBeInTheDocument()
    expect(screen.getByText('Luxury Suites with Ocean View')).toBeInTheDocument()
    expect(screen.getByText('Romantic Getaway Packages')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More →')
    expect(links.length).toBe(3)
  })

  it('displays dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('Jan 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('Feb 20, 2025')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2025')).toBeInTheDocument()
  })

  it('has blog section id', () => {
    const { container } = render(<Blog />)
    expect(container.querySelector('#blog')).toBeInTheDocument()
  })
})
