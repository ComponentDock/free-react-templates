import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Recent Blog/i)
  })

  it('displays blog post cards with titles', () => {
    render(<Blog />)

    const titles = screen.getAllByRole('heading', { level: 3, name: /grow your insights/i })
    expect(titles.length).toBe(3)
  })

  it('shows author information', () => {
    render(<Blog />)

    const authors = screen.getAllByText('John Dorf')
    expect(authors.length).toBe(3)
  })

  it('shows comment counts', () => {
    render(<Blog />)

    const comments = screen.getAllByText(/3 comments/i)
    expect(comments.length).toBe(3)
  })
})
