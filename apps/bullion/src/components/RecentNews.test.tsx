import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentNews } from './RecentNews'
import { recentMiniPosts, recentNewsCard, recentNewsTitle } from '../data'

describe('RecentNews', () => {
  it('renders the section title, the large card and the four mini posts', () => {
    render(<RecentNews />)

    expect(screen.getByRole('heading', { name: recentNewsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: recentNewsCard.headline })).toBeInTheDocument()
    expect(screen.getByText(recentNewsCard.blurb)).toBeInTheDocument()

    for (const post of recentMiniPosts) {
      expect(screen.getByRole('heading', { name: post.headline })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(`by ${post.author}, ${post.date}`))).toBeInTheDocument()
    }
  })
})
