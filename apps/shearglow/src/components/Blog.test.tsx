import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Top Hair Trends/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /How to Choose the Right Hair Color/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Hair Care Tips/i })).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover the hottest hair trends/i)).toBeInTheDocument()
    expect(screen.getByText(/Choosing the perfect shade/i)).toBeInTheDocument()
    expect(screen.getByText(/Simple daily habits/i)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
