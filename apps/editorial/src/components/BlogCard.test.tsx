import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogCard, type BlogPost } from './BlogCard'

const basePost: BlogPost = {
  tag: 'Nature',
  title: 'Test Title',
  description: 'Test description',
  image: 'https://picsum.photos/seed/test/400/300',
  size: 'small',
}

describe('BlogCard', () => {
  it('renders the tag', () => {
    render(<BlogCard post={basePost} />)
    expect(screen.getByText('Nature')).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<BlogCard post={basePost} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<BlogCard post={basePost} />)
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('applies tall height class for tall size', () => {
    render(<BlogCard post={{ ...basePost, size: 'tall' }} />)
    const inner = document.querySelector('[style*="background-image"]')
    expect(inner).toHaveClass('h-80')
  })

  it('applies wide height class for wide size', () => {
    render(<BlogCard post={{ ...basePost, size: 'wide' }} />)
    const inner = document.querySelector('[style*="background-image"]')
    expect(inner).toHaveClass('h-48')
  })

  it('applies large height class for large size', () => {
    render(<BlogCard post={{ ...basePost, size: 'large' }} />)
    const inner = document.querySelector('[style*="background-image"]')
    expect(inner).toHaveClass('h-80')
  })

  it('applies small height class for small size', () => {
    render(<BlogCard post={{ ...basePost, size: 'small' }} />)
    const inner = document.querySelector('[style*="background-image"]')
    expect(inner).toHaveClass('h-48')
  })

  it('renders as an article element', () => {
    render(<BlogCard post={basePost} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })
})
