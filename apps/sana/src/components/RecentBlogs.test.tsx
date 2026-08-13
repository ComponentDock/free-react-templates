import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RecentBlogs } from './RecentBlogs'

describe('RecentBlogs', () => {
  it('shows the heading and three blog cards with image, title, and excerpt', () => {
    const { container } = render(<RecentBlogs />)
    expect(screen.getByRole('heading', { name: 'Our Recent Blogs' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 }).length).toBe(3)
    expect(container.querySelectorAll('img').length).toBe(3)
    expect(screen.getAllByRole('link').length).toBe(3)
  })
})
