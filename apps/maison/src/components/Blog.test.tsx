import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: /A Glimpse from Our Latest Blog/i }),
    ).toBeInTheDocument()
  })

  it('renders at least three blog cards with meta, titles, and blurbs', () => {
    render(<Blog />)
    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/121 Likes/i).length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/05 Comments/i).length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText(/Kitchen of the Future/i)).toBeInTheDocument()
  })
})
