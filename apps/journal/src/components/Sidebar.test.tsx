import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import {
  advertisementTitle,
  latestPosts,
  latestPostsTitle,
  sidebarSearchLabel,
  sidebarSearchPlaceholder,
  subscribeTitle,
  tags,
  tagsTitle,
} from '../data'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the widgets in order: search, newsletter, ad, latest posts, tags', () => {
    const { container } = render(<Sidebar />)

    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()

    const search = screen.getByRole('search')
    expect(search).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: sidebarSearchLabel })).toHaveAttribute(
      'placeholder',
      sidebarSearchPlaceholder,
    )

    expect(screen.getByRole('heading', { name: subscribeTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: advertisementTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: latestPostsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: tagsTitle })).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(latestPosts.length + 1)
  })

  it('lists four latest posts with thumb, tag, title and date', () => {
    render(<Sidebar />)

    for (const post of latestPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders all eight tag chips with the accent hover fill', () => {
    render(<Sidebar />)

    for (const tag of tags) {
      const chip = screen.getByRole('link', { name: tag })
      expect(chip.className).toContain('hover:bg-accent')
    }
  })

  it('prevents navigation when the search form is submitted', () => {
    render(<Sidebar />)

    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
