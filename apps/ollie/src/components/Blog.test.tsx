import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders both blog posts with titles', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Top 10 Skate Spots You Must Visit This Summer',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'How to Master the Kickflip in 30 Days' }),
    ).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/From Los Angeles to Barcelona/)).toBeInTheDocument()
    expect(screen.getByText(/step-by-step guide to learning the kickflip/)).toBeInTheDocument()
  })

  it('renders blog post dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Jake Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Sarah Rodriguez')).toBeInTheDocument()
  })

  it('renders Read More links for each post', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /Read More/ })
    expect(links).toHaveLength(2)
  })

  it('renders blog post images with alt text', () => {
    render(<Blog />)
    expect(screen.getByAltText('Top 10 Skate Spots You Must Visit This Summer')).toBeInTheDocument()
    expect(screen.getByAltText('How to Master the Kickflip in 30 Days')).toBeInTheDocument()
  })
})
