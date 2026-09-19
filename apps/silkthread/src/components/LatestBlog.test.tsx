import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestBlog } from './LatestBlog'

describe('LatestBlog', () => {
  it('renders section title', () => {
    render(<LatestBlog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Fashion New Trends')).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<LatestBlog />)
    expect(screen.getByText('What Curling Irons Are The Best Ones')).toBeInTheDocument()
    expect(screen.getByText('Eternity Bands Do Last Forever')).toBeInTheDocument()
    expect(screen.getByText('The Health Benefits Of Sunglasses')).toBeInTheDocument()
  })

  it('renders Read More links for each post', () => {
    render(<LatestBlog />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('renders post dates', () => {
    render(<LatestBlog />)
    expect(screen.getByText('16 February 2024')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<LatestBlog />)
    expect(screen.getByLabelText('Latest news')).toBeInTheDocument()
  })
})
