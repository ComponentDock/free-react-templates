import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

describe('Blog', () => {
  it('renders heading and 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    const posts = screen.getAllByText('Why Lead Generation is Key for Business Growth')
    expect(posts).toHaveLength(3)
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText('July 03, 2020')).toHaveLength(3)
    expect(screen.getAllByText('Admin')).toHaveLength(3)
  })
})
