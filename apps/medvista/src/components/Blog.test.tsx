import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /Gets Every Single Updates Here/i }),
    ).toBeInTheDocument()
  })

  it('renders 6 blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Tips for Maintaining Heart Health')).toBeInTheDocument()
    expect(screen.getByText('Understanding Neurological Wellness')).toBeInTheDocument()
    expect(screen.getByText('Vision Care for Every Age')).toBeInTheDocument()
    expect(screen.getByText('Modern Dental Hygiene Practices')).toBeInTheDocument()
    expect(screen.getByText('When to Visit a Specialist')).toBeInTheDocument()
    expect(screen.getByText('The Importance of Regular Checkups')).toBeInTheDocument()
  })

  it('renders Read more buttons for each post', () => {
    render(<Blog />)
    const readMoreButtons = screen.getAllByText('Read more')
    expect(readMoreButtons).toHaveLength(6)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    const blogImages = images.filter((img) =>
      (img as HTMLImageElement).src.includes('medvista-blog'),
    )
    expect(blogImages).toHaveLength(6)
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getAllByText('Dr. Wilson').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('3 Comments')).toBeInTheDocument()
  })
})
