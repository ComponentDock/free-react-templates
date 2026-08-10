import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SidebarOne } from './SidebarOne'
import {
  followerRows,
  recentNews,
  recentNewsTitle,
  reviewCard,
  socialLabels,
  stayConnectTitle,
} from '../data'

describe('SidebarOne', () => {
  it('shows the STAY CONNECT card with four brand-colored follower rows', () => {
    render(<SidebarOne />)
    expect(screen.getByRole('heading', { name: stayConnectTitle })).toBeInTheDocument()
    for (const row of followerRows) {
      const link = screen.getByRole('link', { name: `${socialLabels[row.label]} followers` })
      expect(link.textContent).toContain(row.count)
      expect(link).toHaveClass(new RegExp(`bg-${row.brand}`))
    }
  })

  it('shows the RECENT NEWS list with eight 100x100 thumbnails', () => {
    render(<SidebarOne />)
    expect(screen.getByRole('heading', { name: recentNewsTitle })).toBeInTheDocument()
    const list = screen
      .getByRole('heading', { name: recentNewsTitle })
      .closest('div')!.parentElement!
    const links = list.querySelectorAll('a')
    expect(links).toHaveLength(recentNews.length)
    for (const news of recentNews) {
      expect(screen.getByRole('img', { name: news.headline })).toBeInTheDocument()
    }
  })

  it('shows the review card with headline, meta and blue rating link', () => {
    render(<SidebarOne />)
    expect(screen.getByRole('img', { name: reviewCard.headline })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: reviewCard.headline })).toBeInTheDocument()
    const rating = screen.getByRole('link', { name: reviewCard.rating })
    expect(rating).toHaveClass('text-linkblue')
  })
})
