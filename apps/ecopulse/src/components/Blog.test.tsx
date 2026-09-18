import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
  })

  it('renders two blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('How Climate Change Affects Global Wildlife')).toBeInTheDocument()
    expect(
      screen.getByText('Sustainable Living: Tips for Reducing Your Carbon Footprint'),
    ).toBeInTheDocument()
  })

  it('renders excerpts for each post', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover the far-reaching/)).toBeInTheDocument()
    expect(screen.getByText(/Simple everyday changes/)).toBeInTheDocument()
  })

  it('renders dates for each post', () => {
    render(<Blog />)
    expect(screen.getByText('March 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2026')).toBeInTheDocument()
  })

  it('renders images for each post', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
