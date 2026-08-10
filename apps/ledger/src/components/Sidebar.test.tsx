import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import { feedPosts, popularTags, sidebarCategories } from '../data'

describe('Sidebar', () => {
  it('renders all four widgets with their titles', () => {
    render(<Sidebar />)
    expect(screen.getByRole('complementary', { name: /sidebar/i })).toBeInTheDocument()
    for (const title of ['Search Objects', 'Popular Feeds', 'Categories', 'Popular Tags']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders the search form with a red search button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('searchbox', { name: /search keyword/i })).toHaveAttribute(
      'placeholder',
      'Search Keyword',
    )
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders three popular feed rows with thumbnails', () => {
    render(<Sidebar />)
    for (const post of feedPosts) {
      expect(screen.getAllByRole('img', { name: post.title }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('renders the category links with counts', () => {
    render(<Sidebar />)
    for (const category of sidebarCategories) {
      expect(
        screen.getByRole('link', { name: `${category.name} (${category.count})` }),
      ).toBeInTheDocument()
    }
  })

  it('renders the popular tag pills', () => {
    render(<Sidebar />)
    for (const tag of popularTags) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })

  it('keeps the query when the sidebar search is submitted', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByRole('searchbox', { name: /search keyword/i })
    await user.type(input, 'travel')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(input).toHaveValue('travel')
  })
})
