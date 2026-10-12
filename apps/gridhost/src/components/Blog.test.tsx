import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { POSTS } from '../lib/site'

describe('Blog', () => {
  it('renders the centred title and three dated cards with overlapping captions', () => {
    const { container } = render(<Blog />)

    expect(screen.getByText('Our blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our latest news' })).toBeInTheDocument()

    for (const post of POSTS) {
      const link = screen.getByRole('link', { name: post.title })
      expect(link).toHaveAttribute('href', '#blog-details')
      expect(screen.getByText(post.date)).toHaveClass('text-[14px]', 'uppercase', 'text-muted')
    }

    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
    expect(screen.getByText('14 March, 2026').closest('div')).toHaveClass(
      'bottom-[-63px]',
      'w-[94%]',
      'rounded-tr-notch',
      'bg-surface-pink',
    )
  })
})
