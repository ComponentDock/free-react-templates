import { render, screen } from '@testing-library/react'
import { BlogListSection } from './BlogListSection'
import { compactPosts, topFive } from '../data'
import { describe, expect, it } from 'vitest'

describe('BlogListSection', () => {
  it('renders all compact posts', () => {
    render(<BlogListSection />)
    expect(screen.getAllByRole('heading', { name: '10 Amazing new games' })).toHaveLength(
      compactPosts.length,
    )
    expect(screen.getAllByText('By Admin | in Games | 3 Comments')).toHaveLength(
      compactPosts.length,
    )
  })

  it('renders the Top 5 widget with numbered items 01–05', () => {
    render(<BlogListSection />)
    expect(screen.getByRole('heading', { name: 'Top 5 this week' })).toBeInTheDocument()
    for (let i = 0; i < topFive.length; i += 1) {
      expect(screen.getByText(String(i + 1).padStart(2, '0'))).toBeInTheDocument()
    }
  })
})
