import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Blog section with 3 article cards', () => {
    render(<Blog />)

    const section = screen.getByRole('region', { name: /blog/i })
    expect(section).toBeInTheDocument()

    expect(screen.getByText('The Future of Web Design Trends in 2025')).toBeInTheDocument()
    expect(screen.getByText('Building Scalable Applications with Modern Tools')).toBeInTheDocument()
    expect(screen.getByText('Creative Process: From Concept to Completion')).toBeInTheDocument()
  })

  it('renders dates and categories', () => {
    render(<Blog />)
    expect(screen.getByText('March 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('February 28, 2025')).toBeInTheDocument()
    expect(screen.getByText('January 10, 2025')).toBeInTheDocument()

    const designLabels = screen.getAllByText('Design')
    expect(designLabels.length).toBeGreaterThanOrEqual(1)

    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    const blogImages = images.filter((img) => img.getAttribute('src')?.includes('cardwell-blog'))
    expect(blogImages).toHaveLength(3)
  })
})
