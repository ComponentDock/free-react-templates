import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

describe('PostCard', () => {
  const defaultProps = {
    title: 'Test post title',
    date: 'Dec 17, 2019',
    seed: 'test-seed',
  }

  it('renders the post title', () => {
    render(<PostCard {...defaultProps} />)
    expect(screen.getByText('Test post title')).toBeInTheDocument()
  })

  it('renders the date with Posted prefix', () => {
    render(<PostCard {...defaultProps} />)
    expect(screen.getByText('Posted: Dec 17, 2019')).toBeInTheDocument()
  })

  it('renders the thumbnail image', () => {
    render(<PostCard {...defaultProps} />)
    const img = screen.getByAltText('Test post title')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/test-seed/120/120')
  })

  it('has article element as root', () => {
    render(<PostCard {...defaultProps} />)
    const article = screen.getByRole('article')
    expect(article).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<PostCard {...defaultProps} className="custom-class" />)
    const article = screen.getByRole('article')
    expect(article).toHaveClass('custom-class')
  })

  it('has data-testid attribute', () => {
    render(<PostCard {...defaultProps} />)
    expect(screen.getByTestId('post-card')).toBeInTheDocument()
  })
})
