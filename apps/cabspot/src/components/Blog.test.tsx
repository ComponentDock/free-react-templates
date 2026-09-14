import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', {
        name: /latest news from our blog/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders 2 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Top Tips for a Stress-Free Airport Transfer')).toBeInTheDocument()
    expect(
      screen.getByText('How to Organize Event Transportation for Large Groups'),
    ).toBeInTheDocument()
  })

  it('renders blog post tags', () => {
    render(<Blog />)
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Tips')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })

  it('renders 2 blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })
})
