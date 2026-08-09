import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

const titles = ['Paris Fashion Week', 'About Our Fashion App', 'Simple Blog Post']

describe('Blog', () => {
  it('renders the Recent Posts heading and three post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()

    for (const [index, title] of titles.entries()) {
      const link = screen.getByRole('link', { name: title })
      expect(link).toBeInTheDocument()
      expect(link.closest('article')?.querySelector('img')).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/haute-blog-${index + 1}/800/600`,
      )
    }

    expect(screen.getAllByText('20')).toHaveLength(3)
    expect(screen.getAllByText('Jan')).toHaveLength(3)
    expect(screen.getAllByText('Fashion, Event, Lifestyle')).toHaveLength(3)
  })
})
