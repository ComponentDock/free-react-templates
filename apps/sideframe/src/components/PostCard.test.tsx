import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

describe('PostCard', () => {
  it('renders post title', () => {
    render(
      <PostCard
        title="Test Post"
        date="Sep 15, 2026"
        image="https://picsum.photos/seed/test/60/60"
      />,
    )
    expect(screen.getByText('Test Post')).toBeInTheDocument()
  })

  it('renders posted date', () => {
    render(
      <PostCard
        title="Test Post"
        date="Sep 15, 2026"
        image="https://picsum.photos/seed/test/60/60"
      />,
    )
    expect(screen.getByText(/Posted: Sep 15, 2026/)).toBeInTheDocument()
  })

  it('renders avatar image with correct alt text', () => {
    render(
      <PostCard
        title="Test Post"
        date="Sep 15, 2026"
        image="https://picsum.photos/seed/test/60/60"
      />,
    )
    const img = screen.getByRole('img', { name: 'Test Post' })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/test/60/60')
  })

  it('renders as a link with default href', () => {
    render(
      <PostCard
        title="Test Post"
        date="Sep 15, 2026"
        image="https://picsum.photos/seed/test/60/60"
      />,
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#')
  })

  it('renders with custom href', () => {
    render(
      <PostCard
        title="Test Post"
        date="Sep 15, 2026"
        image="https://picsum.photos/seed/test/60/60"
        href="/test"
      />,
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies custom className', () => {
    const { container } = render(
      <PostCard
        title="Test Post"
        date="Sep 15, 2026"
        image="https://picsum.photos/seed/test/60/60"
        className="custom-class"
      />,
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
