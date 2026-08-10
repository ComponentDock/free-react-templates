import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostList } from './PostList'
import { listPosts, loadingMoreLabel } from '../data'

describe('PostList', () => {
  it('renders five horizontal post rows with pills and bordered text cards', () => {
    render(<PostList />)
    expect(screen.getAllByRole('article')).toHaveLength(5)
    for (const post of listPosts) {
      expect(screen.getAllByText(post.pill).length).toBeGreaterThan(0)
      expect(screen.getAllByRole('heading', { name: post.title }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('By Michal / March 30, 2019')).toHaveLength(5)
  })

  it('renders the LOADING MORE button with an arrow', () => {
    render(<PostList />)
    expect(screen.getByRole('link', { name: loadingMoreLabel })).toBeInTheDocument()
  })
})
