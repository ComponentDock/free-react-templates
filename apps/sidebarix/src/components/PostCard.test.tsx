import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

describe('PostCard', () => {
  const props = {
    title: 'Test Post Title',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/test/120/120',
  }

  it('renders the post title', () => {
    render(<PostCard {...props} />)
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
  })

  it('displays the posted date', () => {
    render(<PostCard {...props} />)
    expect(screen.getByText('Posted: Sep 15, 2026')).toBeInTheDocument()
  })

  it('renders the thumbnail image', () => {
    render(<PostCard {...props} />)
    const img = screen.getByAltText('Test Post Title')
    expect(img).toHaveAttribute('src', props.image)
  })

  it('links to the post href', () => {
    render(<PostCard {...props} href="/post/1" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/post/1')
  })

  it('defaults href to #', () => {
    render(<PostCard {...props} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '#')
  })
})
