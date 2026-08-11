import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SmallPostRow } from './SmallPostRow'
import type { Post } from '../data'

const samplePost: Post = {
  seed: 'atlas-3',
  category: 'Travel',
  title: 'A Slow Journey Through the Highlands',
  author: 'Katy Liu',
  date: 'Sep 29, 2017 at 9:48 am',
  excerpt: 'A short excerpt about the trip.',
}

const noExcerptPost: Post = {
  seed: 'atlas-4',
  category: 'Vogue',
  title: 'A Post Without an Excerpt',
  author: 'John Dorian',
  date: 'Sep 28, 2017 at 11:20 am',
}

describe('SmallPostRow', () => {
  it('renders the title, meta, and a 97px thumbnail by default', () => {
    render(<SmallPostRow post={samplePost} />)
    expect(
      screen.getByRole('link', { name: 'A Slow Journey Through the Highlands' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Katy Liu on Sep 29, 2017/)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'A Slow Journey Through the Highlands' }),
    ).toHaveAttribute('src', expect.stringContaining('/97/97'))
  })

  it('renders an excerpt and a 200px thumbnail for the md size', () => {
    render(<SmallPostRow post={samplePost} size="md" />)
    expect(screen.getByText('A short excerpt about the trip.')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'A Slow Journey Through the Highlands' }),
    ).toHaveAttribute('src', expect.stringContaining('/200/140'))
  })

  it('omits the excerpt when an md post has none', () => {
    render(<SmallPostRow post={noExcerptPost} size="md" />)
    expect(screen.queryByText('A short excerpt about the trip.')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'A Post Without an Excerpt' })).toBeInTheDocument()
  })

  it('renders a 70px thumbnail for the widget size', () => {
    render(<SmallPostRow post={samplePost} size="widget" />)
    expect(
      screen.getByRole('img', { name: 'A Slow Journey Through the Highlands' }),
    ).toHaveAttribute('src', expect.stringContaining('/70/70'))
  })
})
