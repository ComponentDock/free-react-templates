import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { recentPosts, sidebar, tagPills } from '../data'

describe('Sidebar', () => {
  it('renders the about-me bio', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: sidebar.author })).toBeInTheDocument()
    expect(screen.getByText(sidebar.blurb)).toBeInTheDocument()
  })

  it('renders four recent posts with title, date and tags', () => {
    render(<Sidebar />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(recentPosts.length)
    recentPosts.forEach((post, index) => {
      const article = articles[index]!
      expect(within(article).getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(within(article).getByText(post.date)).toBeInTheDocument()
      expect(within(article).getByRole('link', { name: post.tags[0]! })).toBeInTheDocument()
    })
  })

  it('renders the black tag pills', () => {
    render(<Sidebar />)
    for (const tag of tagPills) {
      expect(screen.getAllByRole('link', { name: tag }).length).toBeGreaterThan(0)
    }
  })

  it('renders the ad banner', () => {
    render(<Sidebar />)
    expect(screen.getByAltText('Advertisement')).toBeInTheDocument()
  })
})
