import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularPosts } from './PopularPosts'
import { popularPosts } from '../data'

describe('PopularPosts', () => {
  it('renders the heading, numbered entries 01–04 and the See All Popular link', () => {
    render(<PopularPosts />)

    expect(screen.getByRole('heading', { level: 2, name: 'Popular Posts' })).toBeInTheDocument()

    for (let index = 1; index <= popularPosts.length; index += 1) {
      expect(screen.getByText(String(index).padStart(2, '0'))).toBeInTheDocument()
    }
    for (const post of popularPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }

    const more = screen.getByRole('link', { name: /See All Popular/ })
    expect(more).toHaveClass('text-accent')
  })
})
