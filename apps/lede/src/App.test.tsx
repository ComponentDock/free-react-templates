import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'
import {
  brandName,
  breakingNewsHeadline,
  breakingNewsLabel,
  editorsPickTitle,
  featurePost,
  footerWidgets,
  instagramFeedTitle,
  latestNewsTitle,
  latestNewsRows,
  mostPopularTitle,
  newsletterTitle,
  popularGrid,
  popularPostsTitle,
  relevantStoriesRows,
  relevantStoriesTitle,
  socialNetworksTitle,
  stackedPosts,
} from './data'

describe('App', () => {
  it('composes all sections, sets the document title and exposes landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Lede — News Magazine Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Header brand + navigation.
    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    // Hero top posts.
    expect(
      screen.getAllByRole('heading', { level: 3, name: featurePost.title }).length,
    ).toBeGreaterThan(0)
    for (const post of stackedPosts) {
      expect(screen.getAllByRole('heading', { name: post.title }).length).toBeGreaterThan(0)
    }

    // Breaking news ticker.
    expect(screen.getByText(breakingNewsLabel)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: breakingNewsHeadline })).toBeInTheDocument()

    // Main column sections.
    expect(screen.getByRole('heading', { name: latestNewsTitle })).toBeInTheDocument()
    for (const row of latestNewsRows) {
      expect(screen.getAllByRole('heading', { name: row.title }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('heading', { name: popularPostsTitle })).toBeInTheDocument()
    for (const post of popularGrid) {
      expect(screen.getAllByRole('heading', { name: post.title }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('heading', { name: relevantStoriesTitle })).toBeInTheDocument()
    for (const row of relevantStoriesRows) {
      expect(screen.getAllByRole('heading', { name: row.title }).length).toBeGreaterThan(0)
    }

    // Sidebar widgets.
    expect(screen.getByRole('heading', { name: editorsPickTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: mostPopularTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: socialNetworksTitle })).toBeInTheDocument()

    // Footer widgets.
    for (const widget of footerWidgets) {
      expect(screen.getByRole('heading', { name: widget.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: instagramFeedTitle })).toBeInTheDocument()
  })
})
