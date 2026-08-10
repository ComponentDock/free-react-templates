import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import { adAlt, author, categories, popularPosts, searchPlaceholder, tags } from '../data'

describe('Sidebar', () => {
  it('renders the search widget with a pill input and button', () => {
    render(<Sidebar />)

    expect(screen.getByRole('searchbox', { name: searchPlaceholder })).toHaveAttribute(
      'placeholder',
      searchPlaceholder,
    )
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders the centered author widget with socials and bio', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: author.name })).toBeInTheDocument()
    expect(screen.getByText(author.role)).toBeInTheDocument()
    expect(screen.getByText(author.bio)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('renders the popular posts widget with four thumbnail rows', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: 'Popular Posts' })).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getAllByText(post.time).length).toBeGreaterThan(0)
    }
  })

  it('renders the ad banner, categories with counts and the tag cloud', () => {
    render(<Sidebar />)

    expect(screen.getByRole('img', { name: adAlt })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Post Categories' })).toBeInTheDocument()
    for (const category of categories) {
      expect(
        screen.getByRole('link', {
          name: `${category.label} ${String(category.count).padStart(2, '0')}`,
        }),
      ).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'Tag Clouds' })).toBeInTheDocument()
    for (const tag of tags) {
      expect(screen.getAllByRole('link', { name: tag }).length).toBeGreaterThan(0)
    }
  })
})
