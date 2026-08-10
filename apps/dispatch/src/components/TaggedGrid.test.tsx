import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TaggedGrid } from './TaggedGrid'
import type { Article } from '../data'

const articles: Article[] = [
  {
    title: 'Large Story About Vogue',
    category: 'vogue',
    image: 'https://picsum.photos/seed/dispatch-a/555/325',
    variant: 'image',
    size: 'large',
  },
  {
    title: 'A Travel Diary',
    category: 'travel',
    image: 'https://picsum.photos/seed/dispatch-b/263/200',
    variant: 'image',
  },
  {
    title: 'Another Vogue Piece',
    category: 'vogue',
    variant: 'text',
  },
]

describe('TaggedGrid', () => {
  it('renders all cards initially', () => {
    render(<TaggedGrid title="Don't Miss" articles={articles} />)
    expect(screen.getByRole('heading', { name: "Don't Miss" })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('filters the grid when a tag pill is activated', async () => {
    const user = userEvent.setup()
    render(<TaggedGrid title="Don't Miss" articles={articles} />)
    await user.click(screen.getByRole('button', { name: 'vogue' }))
    expect(screen.getByRole('link', { name: 'Large Story About Vogue' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Another Vogue Piece' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'A Travel Diary' })).not.toBeInTheDocument()
  })

  it('shows an empty state when no card matches and resets on a new selection', async () => {
    const user = userEvent.setup()
    render(<TaggedGrid title="Don't Miss" articles={articles} />)
    await user.click(screen.getByRole('button', { name: 'more' }))
    await user.click(screen.getByRole('button', { name: 'sport' }))
    expect(screen.getByText('No articles found in this category.')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'travel' }))
    expect(screen.getByRole('link', { name: 'A Travel Diary' })).toBeInTheDocument()
    expect(screen.queryByText('No articles found in this category.')).not.toBeInTheDocument()
  })

  it('collapses the more pills when a pill is selected', async () => {
    const user = userEvent.setup()
    render(<TaggedGrid title="Don't Miss" articles={articles} />)
    const more = screen.getByRole('button', { name: 'more' })
    await user.click(more)
    expect(more).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('button', { name: 'sport' }))
    expect(more).toHaveAttribute('aria-expanded', 'false')
  })
})
