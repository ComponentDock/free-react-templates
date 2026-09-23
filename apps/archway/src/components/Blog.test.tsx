import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(3)
  })

  it('displays post metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText('Sep. 20, 2018').length).toBe(3)
    expect(screen.getAllByText('Admin').length).toBe(3)
    expect(screen.getAllByText('3 comments').length).toBe(3)
  })
})
