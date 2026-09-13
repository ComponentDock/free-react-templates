import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentPodcasts } from './RecentPodcasts'

describe('RecentPodcasts', () => {
  it('renders section heading', () => {
    render(<RecentPodcasts />)
    expect(screen.getByRole('heading', { name: 'Recent Podcasts' })).toBeInTheDocument()
  })

  it('renders 5 episode cards', () => {
    render(<RecentPodcasts />)
    expect(screen.getAllByRole('article')).toHaveLength(5)
  })

  it('renders episode titles', () => {
    render(<RecentPodcasts />)
    expect(screen.getByText(/Episode 08/)).toBeInTheDocument()
    expect(screen.getByText(/Episode 07/)).toBeInTheDocument()
    expect(screen.getByText(/Episode 06/)).toBeInTheDocument()
    expect(screen.getByText(/Episode 05/)).toBeInTheDocument()
    expect(screen.getByText(/Episode 04/)).toBeInTheDocument()
  })

  it('renders pagination', () => {
    render(<RecentPodcasts />)
    expect(screen.getByRole('navigation', { name: 'Episode pagination' })).toBeInTheDocument()
  })

  it('marks page 1 as current', () => {
    render(<RecentPodcasts />)
    expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders episode descriptions', () => {
    render(<RecentPodcasts />)
    expect(screen.getByText(/Learn the fundamentals of audio production/)).toBeInTheDocument()
  })
})
