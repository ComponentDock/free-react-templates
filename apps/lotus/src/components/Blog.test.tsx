import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and four blog cards with image, date, byline, title, and read-more link', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    expect(screen.getByText(/June 12, 2026 · Admin/)).toBeInTheDocument()
    expect(screen.getByText(/July 24, 2026 · Admin/)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /Read more/ })).toHaveLength(4)
  })
})
