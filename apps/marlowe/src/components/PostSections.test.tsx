import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { PostSections } from './PostSections'
import { loadMoreLabel, postSections } from '../data'

describe('PostSections', () => {
  it('renders every section title with its post rows', () => {
    render(<PostSections />)
    for (const section of postSections) {
      const heading = screen.getByRole('heading', { name: new RegExp(section.title, 'i') })
      expect(heading).toBeInTheDocument()
      for (const post of section.posts) {
        expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      }
    }
  })

  it('renders post row content: category, meta and excerpt', () => {
    render(<PostSections />)
    const first = postSections[0]!.posts[0]!
    const section = screen.getByRole('region', { name: /Recent Posts/i })
    expect(within(section).getByText(first.category)).toBeInTheDocument()
    expect(within(section).getByText(new RegExp(first.meta))).toBeInTheDocument()
    expect(
      within(section).getAllByText(new RegExp(first.excerpt.slice(0, 20))).length,
    ).toBeGreaterThan(0)
  })

  it('renders the Load More button after the last section', () => {
    render(<PostSections />)
    expect(screen.getByRole('button', { name: loadMoreLabel })).toBeInTheDocument()
  })
})
