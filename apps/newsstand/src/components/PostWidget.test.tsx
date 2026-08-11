import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostWidget } from './PostWidget'
import { postImage, type Post } from '../data'

const post: Post = {
  id: 1,
  title: 'The Best Free Fonts For Your Next Project',
  category: 'Web Design',
  categoryId: 1,
  date: 'January 21, 2018',
  seed: 'newsstand-13',
}

describe('PostWidget', () => {
  it('renders a thumbnail and a 15px title link', () => {
    const { container } = render(<PostWidget post={post} />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', postImage(post, 150, 100))
    expect(img).toHaveAttribute('alt', '')
    expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
  })
})
