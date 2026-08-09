import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and four post cards with titles and excerpts', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest From Blog' })).toBeInTheDocument()
    for (const title of [
      'Portable Fashion for Women',
      'The Art of a Clean Shave',
      'Beard Care Essentials',
      'Classic Cuts That Never Fade',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('13th Dec')).toHaveLength(4)
    const posts = screen.getAllByRole('article')
    expect(posts).toHaveLength(4)
    for (const post of posts) {
      expect(within(post).getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    }
  })

  it('shows comment and like counts on each post', () => {
    render(<Blog />)
    expect(screen.getAllByText('15')).toHaveLength(4)
    expect(screen.getAllByText('04')).toHaveLength(4)
  })
})
