import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Discover great places in New York')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Let's uncover the best places/)).toBeInTheDocument()
  })

  it('renders search inputs', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search query')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Hero />)
    expect(screen.getByText('SEARCH')).toBeInTheDocument()
  })

  it('renders browse links', () => {
    render(<Hero />)
    expect(screen.getByText('Browse Popular')).toBeInTheDocument()
    expect(screen.getByText('Recently Added')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Hero className="custom-hero" />)
    expect(container.firstChild).toHaveClass('custom-hero')
  })
})
