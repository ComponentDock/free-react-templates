import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentNews } from './RecentNews'
import { recentNews } from '../data'

describe('RecentNews', () => {
  it("renders the heading and post rows with an Editor's Pick caption on the first", () => {
    render(<RecentNews />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent News' })).toBeInTheDocument()
    expect(screen.getByText("Editor's Pick")).toBeInTheDocument()

    for (const post of recentNews) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: post.author })).toBeInTheDocument()
    }
  })
})
