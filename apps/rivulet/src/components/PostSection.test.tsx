import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostSection } from './PostSection'
import { posts, readMoreLabel, watchVideoLabel } from '../data'

describe('PostSection', () => {
  it('renders date, categories, uppercase title, excerpt and READ MORE', () => {
    const post = posts[0]!
    render(<PostSection post={post} />)
    expect(screen.getByRole('region', { name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.date)).toBeInTheDocument()
    expect(screen.getByText(post.categories)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: post.title })).toBeInTheDocument()
    expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(readMoreLabel) })).toBeInTheDocument()
  })

  it('shows the dark overlay over the background image', () => {
    const post = posts[1]!
    const { container } = render(<PostSection post={post} />)
    expect(container.querySelector('[class*="bg-overlay"]')).toBeInTheDocument()
  })

  it('renders WATCH VIDEO only when the post has a video popup', () => {
    render(<PostSection post={posts[1]!} />)
    expect(screen.getByRole('link', { name: new RegExp(watchVideoLabel) })).toBeInTheDocument()
  })

  it('omits WATCH VIDEO for posts without a video popup', () => {
    render(<PostSection post={posts[0]!} />)
    expect(
      screen.queryByRole('link', { name: new RegExp(watchVideoLabel) }),
    ).not.toBeInTheDocument()
  })
})
