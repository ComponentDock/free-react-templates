import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Create Beautiful Website In Less Than An Hour')).toBeInTheDocument()
    expect(screen.getByText('The Future of Web Development in 2024')).toBeInTheDocument()
    expect(screen.getByText('Design Principles Every Developer Should Know')).toBeInTheDocument()
  })

  it('renders Continue Reading links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Continue Reading...')
    expect(links.length).toBe(3)
  })

  it('renders author and date info', () => {
    render(<Blog />)
    expect(screen.getByText(/Ham Brook/)).toBeInTheDocument()
    expect(screen.getByText(/Jan 18, 2024/)).toBeInTheDocument()
  })
})
