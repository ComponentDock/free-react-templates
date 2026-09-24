import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentArticles } from './RecentArticles'

describe('RecentArticles', () => {
  it('renders the Recent Articles heading', () => {
    render(<RecentArticles />)
    expect(screen.getByRole('heading', { name: /Recent Articles/i })).toBeInTheDocument()
  })

  it('renders four news cards with images and titles', () => {
    render(<RecentArticles />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
