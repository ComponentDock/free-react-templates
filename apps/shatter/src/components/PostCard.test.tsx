import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'

describe('PostCard', () => {
  const baseProps = {
    image: 'https://picsum.photos/seed/test/400/300',
    category: 'Tech',
    date: 'Nov 18, 2026',
    headline: 'Test Headline',
  }

  it('renders stacked variant with excerpt and comment count', () => {
    render(
      <PostCard {...baseProps} variant="stacked" excerpt="Test excerpt text" commentCount={5} />,
    )
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
    expect(screen.getByText('Tech')).toBeInTheDocument()
    expect(screen.getByText('Nov 18, 2026')).toBeInTheDocument()
    expect(screen.getByText('Test excerpt text')).toBeInTheDocument()
    expect(screen.getByText('5 comments')).toBeInTheDocument()
  })

  it('renders stacked variant without optional props', () => {
    render(<PostCard {...baseProps} variant="stacked" />)
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
    expect(screen.queryByText('comments')).not.toBeInTheDocument()
  })

  it('renders horizontal variant', () => {
    render(<PostCard {...baseProps} variant="horizontal" />)
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
    expect(screen.getByText('Tech')).toBeInTheDocument()
  })

  it('renders large variant with play button', () => {
    render(
      <PostCard
        {...baseProps}
        variant="large"
        excerpt="Large excerpt"
        commentCount={10}
        showPlayButton
      />,
    )
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
    expect(screen.getByText('Large excerpt')).toBeInTheDocument()
    expect(screen.getByText(/10\s+comments/)).toBeInTheDocument()
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('renders large variant without play button', () => {
    render(<PostCard {...baseProps} variant="large" />)
    expect(screen.getByText('Test Headline')).toBeInTheDocument()
    expect(screen.queryByLabelText('Play video')).not.toBeInTheDocument()
  })

  it('applies correct image alt text', () => {
    render(<PostCard {...baseProps} variant="stacked" />)
    const img = screen.getByAltText('Test Headline')
    expect(img).toHaveAttribute('src', baseProps.image)
  })
})
