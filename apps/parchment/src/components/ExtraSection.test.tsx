import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExtraSection } from './ExtraSection'
import {
  categoriesHeading,
  categoriesLinks,
  popularHeading,
  popularPosts,
  siteLinks,
  siteLinksHeading,
} from '../data'

describe('ExtraSection', () => {
  it('renders the three column headings with the navy accent bar', () => {
    const { container } = render(<ExtraSection />)

    expect(screen.getByRole('heading', { name: popularHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: categoriesHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: siteLinksHeading })).toBeInTheDocument()

    // Every heading carries the 90px navy underline bar.
    const bars = Array.from(container.querySelectorAll('span')).filter((span) =>
      span.getAttribute('class')?.includes('bg-brand'),
    )
    expect(bars).toHaveLength(3)
    for (const bar of bars) {
      expect(bar.getAttribute('class')).toContain('w-[90px]')
    }
  })

  it('renders six popular posts with title and meta in a 2-column grid', () => {
    const { container } = render(<ExtraSection />)

    for (const post of popularPosts) {
      expect(screen.getByRole('heading', { level: 5, name: post.title })).toBeInTheDocument()
      // Most popular posts share the same "By John Doe on …" meta line.
      expect(screen.getAllByText(post.meta).length).toBeGreaterThan(0)
    }
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })

  it('renders the categories and site links lists', () => {
    render(<ExtraSection />)

    for (const name of categoriesLinks) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    for (const name of siteLinks) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })
})
