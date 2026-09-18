import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the blog heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Blog')
  })

  it('renders all three blog posts', () => {
    render(<BlogSection />)
    expect(screen.getByText('The Art of Visual Storytelling')).toBeInTheDocument()
    expect(screen.getByText('Design Trends for 2024')).toBeInTheDocument()
    expect(screen.getByText('Building a Brand Identity')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<BlogSection />)
    expect(screen.getByText(/strategic design choices/)).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
