import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders two blog posts with different titles', () => {
    render(<Blog />)
    expect(screen.getByText(/16 Easy Ideas/)).toBeInTheDocument()
    expect(screen.getByText(/10 Simple Ways/)).toBeInTheDocument()
  })

  it('shows Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read more/)
    expect(links.length).toBe(2)
  })

  it('shows the section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/Our Recent News/)).toBeInTheDocument()
  })
})
