import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TrendingNews } from './TrendingNews'
import { MOST_POPULAR, TRENDING_NEWS } from '../data'

describe('TrendingNews', () => {
  it('renders the Trending News heading and carousel cards', () => {
    render(<TrendingNews />)
    expect(screen.getByRole('heading', { name: 'Trending News' })).toBeInTheDocument()
    expect(screen.getAllByText(TRENDING_NEWS[0]!.title).length).toBeGreaterThan(0)
  })

  it('navigates the trending carousel', async () => {
    const user = userEvent.setup()
    render(<TrendingNews />)
    await user.click(screen.getByRole('button', { name: 'Next trending stories' }))
    expect(screen.getAllByText(TRENDING_NEWS[1]!.title).length).toBeGreaterThan(0)
  })

  it('renders the Most Popular widget with posts', () => {
    render(<TrendingNews />)
    expect(screen.getByRole('heading', { name: 'Most Popular' })).toBeInTheDocument()
    for (const post of MOST_POPULAR) {
      expect(screen.getAllByText(post.title).length).toBeGreaterThan(0)
    }
  })
})
