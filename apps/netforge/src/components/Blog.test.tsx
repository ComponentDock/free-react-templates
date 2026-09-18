import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and all three blog posts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()

    for (const title of [
      'The Future of Cloud Computing in 2026',
      'Top Cybersecurity Practices for Small Businesses',
      'Why Your Business Needs a Mobile-First Strategy',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows post dates and images', () => {
    render(<Blog />)

    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Aug 28, 2026')).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
