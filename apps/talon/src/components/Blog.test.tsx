import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three blog post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest Blog' })).toBeInTheDocument()

    const postHeadings = screen.getAllByRole('heading', { level: 3 })
    const titles = postHeadings.map((h) => h.textContent)
    expect(titles).toContain('Best Tips for Modern Web Design')
    expect(titles).toContain('Building Scalable Applications')
    expect(titles).toContain('Digital Marketing Strategies')
    expect(postHeadings).toHaveLength(3)

    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(3)
  })
})
