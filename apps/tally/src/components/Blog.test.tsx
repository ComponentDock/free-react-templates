import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByText('From The Blog')).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.length).toBe(3)
  })

  it('displays date on blog cards', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/January \d+, 2025/)
    expect(dates.length).toBe(3)
  })

  it('displays author on blog cards', () => {
    render(<Blog />)
    const authors = screen.getAllByText(/Admin/)
    expect(authors.length).toBeGreaterThanOrEqual(3)
  })

  it('displays comment count', () => {
    render(<Blog />)
    expect(screen.getAllByText(/Comments/).length).toBeGreaterThan(0)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const imgs = screen.getAllByRole('img', { name: /blog/i })
    expect(imgs.length).toBe(3)
  })
})
