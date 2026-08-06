import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog posts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: /Recent Blog/i })).toBeInTheDocument()

    const posts = screen.getAllByRole('heading', { level: 3 })
    expect(posts.length).toBe(3)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
