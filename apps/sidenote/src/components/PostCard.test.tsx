import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PostCard } from './PostCard'

describe('PostCard', () => {
  const defaultProps = {
    title: 'Test Post Title',
    date: 'Dec 17, 2019',
    seed: 'test-seed',
  }

  it('renders the title', () => {
    render(<PostCard {...defaultProps} />)
    expect(screen.getByText('Test Post Title')).toBeInTheDocument()
  })

  it('renders the date', () => {
    render(<PostCard {...defaultProps} />)
    expect(screen.getByText('Posted: Dec 17, 2019')).toBeInTheDocument()
  })

  it('renders the thumbnail image', () => {
    render(<PostCard {...defaultProps} />)
    const img = screen.getByRole('img', { name: 'Test Post Title' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/test-seed/120/120')
  })

  it('renders as an article element', () => {
    const { container } = render(<PostCard {...defaultProps} />)
    expect(container.querySelector('article')).toBeInTheDocument()
  })
})
