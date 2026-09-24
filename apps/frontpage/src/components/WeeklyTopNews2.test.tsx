import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyTopNews2 } from './WeeklyTopNews2'

describe('WeeklyTopNews2', () => {
  it('renders the Weekly Top News heading', () => {
    render(<WeeklyTopNews2 />)
    expect(screen.getByRole('heading', { name: /Weekly Top News/i })).toBeInTheDocument()
  })

  it('renders four news items with dates and titles on gray background', () => {
    render(<WeeklyTopNews2 />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
    expect(screen.getByText('September 22, 2026')).toBeInTheDocument()
    expect(screen.getByText(/Apple Unveils Next-Generation MacBook Pro/)).toBeInTheDocument()
  })

  it('renders category badges for each article', () => {
    render(<WeeklyTopNews2 />)
    for (const cat of ['Technology', 'Business', 'Health', 'Entertainment']) {
      expect(screen.getByText(cat)).toBeInTheDocument()
    }
  })
})
