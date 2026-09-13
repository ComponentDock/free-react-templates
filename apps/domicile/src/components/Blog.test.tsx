import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders all 4 blog posts', () => {
    render(<Blog />)
    const posts = screen.getAllByText('Addiction When Gambling Becomes A Problem')
    expect(posts).toHaveLength(4)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/25 June, 2024/)
    expect(dates.length).toBe(4)
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    const excerpts = screen.getAllByText(/Computers have become/)
    expect(excerpts.length).toBe(4)
  })
})
