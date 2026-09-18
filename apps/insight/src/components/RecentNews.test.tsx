import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentNews } from './RecentNews'

describe('RecentNews', () => {
  it('renders heading and 3 blog cards', () => {
    render(<RecentNews />)
    expect(screen.getByText('Our Recent News')).toBeInTheDocument()
    expect(screen.getByText('The Future of Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('5 Strategies for Growth')).toBeInTheDocument()
    expect(screen.getByText('Navigating Market Changes')).toBeInTheDocument()
  })

  it('renders dates and See more links', () => {
    render(<RecentNews />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    const seeMore = screen.getAllByText('See more')
    expect(seeMore.length).toBe(3)
  })
})
