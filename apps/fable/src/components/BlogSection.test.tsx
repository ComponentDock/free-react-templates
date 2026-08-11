import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogSection } from './BlogSection'
import {
  aboutMeTitle,
  authorBio,
  authorName,
  blogEntries,
  blogHeading,
  blogSectionLabel,
  categories,
  categoriesTitle,
  heroReadMore,
  searchLabelText,
  searchPlaceholder,
} from '../data'

describe('BlogSection', () => {
  it('renders the blog heading and dated entries with thumbnail, meta, title, and CTA', () => {
    const { container } = render(<BlogSection />)
    expect(screen.getByRole('region', { name: blogSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blogHeading })).toBeInTheDocument()

    for (const entry of blogEntries) {
      expect(screen.getAllByText(entry.category).length).toBeGreaterThan(0)
      expect(screen.getAllByText(entry.date).length).toBeGreaterThan(0)
      expect(screen.getByRole('heading', { name: entry.title })).toBeInTheDocument()
      expect(screen.getByText(entry.excerpt)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: heroReadMore })).toHaveLength(blogEntries.length)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(blogEntries.length)
  })

  it('renders the sidebar with an About Me box, search box, and Categories box', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: aboutMeTitle })).toBeInTheDocument()
    expect(screen.getByText(authorName)).toBeInTheDocument()
    expect(
      screen.getByText(
        (_, element) => element?.textContent === `Hi! My name is ${authorName}, ${authorBio}`,
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: searchLabelText })).toHaveAttribute(
      'placeholder',
      searchPlaceholder,
    )
    expect(screen.getByRole('heading', { name: categoriesTitle })).toBeInTheDocument()
    for (const category of categories) {
      expect(screen.getByRole('link', { name: category.label })).toBeInTheDocument()
    }
  })
})
