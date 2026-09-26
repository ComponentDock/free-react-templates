import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogCard } from './BlogCard'

const defaultProps = {
  title: 'Test Title',
  category: 'Mockup',
  imageUrl: 'https://picsum.photos/seed/test/600/400',
  hoverImageUrl: 'https://picsum.photos/seed/test-hover/600/400',
  previewCount: 100,
  downloadCount: 50,
  likeCount: 25,
}

describe('BlogCard', () => {
  it('renders the title', () => {
    render(<BlogCard {...defaultProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders the category', () => {
    render(<BlogCard {...defaultProps} />)
    expect(screen.getByText('Mockup')).toBeInTheDocument()
  })

  it('renders preview and download counts', () => {
    render(<BlogCard {...defaultProps} />)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('renders the like count', () => {
    render(<BlogCard {...defaultProps} />)
    expect(screen.getByText('25')).toBeInTheDocument()
  })

  it('increments like count when heart is clicked', async () => {
    const user = userEvent.setup()
    render(<BlogCard {...defaultProps} />)
    const likeButton = screen.getByRole('button', { name: /like/i })
    await user.click(likeButton)
    expect(screen.getByText('26')).toBeInTheDocument()
  })

  it('does not increment like count twice', async () => {
    const user = userEvent.setup()
    render(<BlogCard {...defaultProps} />)
    const likeButton = screen.getByRole('button', { name: /like/i })
    await user.click(likeButton)
    await user.click(likeButton)
    expect(screen.getByText('26')).toBeInTheDocument()
  })

  it('shows liked state after clicking', async () => {
    const user = userEvent.setup()
    render(<BlogCard {...defaultProps} />)
    const likeButton = screen.getByRole('button', { name: /like/i })
    await user.click(likeButton)
    expect(screen.getByRole('button', { name: /liked/i })).toBeInTheDocument()
  })

  it('renders two images for main and hover', () => {
    const { container } = render(<BlogCard {...defaultProps} />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', defaultProps.imageUrl)
    expect(images[1]).toHaveAttribute('src', defaultProps.hoverImageUrl)
  })
})
