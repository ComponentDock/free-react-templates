import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Digital Design Trends')).toBeInTheDocument()
    expect(screen.getByText('Building scalable web applications')).toBeInTheDocument()
  })

  it('renders Continue Reading links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Continue Reading...')
    expect(links.length).toBe(3)
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText(/Ham Brook/)).toBeInTheDocument()
    expect(screen.getAllByText(/James Phelps/).length).toBeGreaterThanOrEqual(1)
  })
})
