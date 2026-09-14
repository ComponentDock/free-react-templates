import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders blog post cards', () => {
    render(<Blog />)
    const posts = screen.getAllByText('New Friends With Books')
    expect(posts).toHaveLength(3)
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 12, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 8, 2026')).toBeInTheDocument()
  })
})
