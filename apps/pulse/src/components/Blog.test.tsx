import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent From Blog' })).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('How to Build a Strong Digital Brand Presence')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Web Design Trends for 2025')).toBeInTheDocument()
    expect(screen.getByText('The Power of Social Media Marketing')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover the essential strategies/i)).toBeInTheDocument()
    expect(screen.getByText(/Stay ahead of the curve/i)).toBeInTheDocument()
    expect(screen.getByText(/Learn how to leverage social media/i)).toBeInTheDocument()
  })

  it('renders comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
    expect(screen.getByText('8 Comments')).toBeInTheDocument()
    expect(screen.getByText('5 Comments')).toBeInTheDocument()
  })

  it('renders READ MORE links', () => {
    render(<Blog />)
    const links = screen.getAllByText('READ MORE')
    expect(links.length).toBe(3)
  })

  it('renders blog images with alt text', () => {
    render(<Blog />)
    expect(
      screen.getByRole('img', { name: 'How to Build a Strong Digital Brand Presence' }),
    ).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Mar 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Mar 5, 2025')).toBeInTheDocument()
  })
})
