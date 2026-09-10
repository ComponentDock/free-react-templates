import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders Update From Blog headline', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /update from blog/i })).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    const cards = screen.getAllByText(/Technology/)
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/waters likeness/i)).toBeInTheDocument()
    expect(screen.getByText(/bring void/i)).toBeInTheDocument()
    expect(screen.getByText(/lights they/i)).toBeInTheDocument()
  })

  it('renders comment and like counts', () => {
    render(<Blog />)
    const comments = screen.getAllByText(/Comments/)
    expect(comments.length).toBeGreaterThanOrEqual(3)
  })
})
