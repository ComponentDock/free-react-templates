import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import {
  bannerHeading,
  bannerLinkLabel,
  popularPosts,
  popularPostsTitle,
  tickerRows,
} from '../data'

describe('Sidebar', () => {
  it('renders the ticker, popular posts, banner and newsletter form', () => {
    render(<Sidebar />)

    for (const row of tickerRows) {
      expect(screen.getByText(row)).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: popularPostsTitle })).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(screen.getByRole('heading', { name: post.headline })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: bannerHeading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: bannerLinkLabel })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
  })
})
