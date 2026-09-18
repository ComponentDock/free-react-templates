import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PopularPosts } from './PopularPosts'

describe('PopularPosts', () => {
  it('renders job post cards', () => {
    render(<PopularPosts />)
    expect(screen.getAllByText('View Job Post').length).toBeGreaterThanOrEqual(4)
  })

  it('renders job titles and locations', () => {
    render(<PopularPosts />)
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
    expect(screen.getByText('San Francisco')).toBeInTheDocument()
  })

  it('renders job descriptions', () => {
    render(<PopularPosts />)
    expect(screen.getByText(/Join our creative team/)).toBeInTheDocument()
    expect(screen.getByText(/Build scalable web applications/)).toBeInTheDocument()
  })

  it('renders placeholder images', () => {
    const { container } = render(<PopularPosts />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
