import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TrendingSlider } from './TrendingSlider'
import { trendingPosts } from '../data'

describe('TrendingSlider', () => {
  it('renders the heading and the first feature card with all content pieces', () => {
    render(<TrendingSlider />)

    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument()
    const first = trendingPosts[0]!
    expect(screen.getByRole('heading', { name: first.title })).toBeInTheDocument()
    expect(screen.getByText(first.excerpt)).toBeInTheDocument()
    expect(screen.getByText(first.author)).toBeInTheDocument()
    expect(screen.getByText(first.date)).toBeInTheDocument()
    for (const category of first.categories) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
    }
  })

  it('changes the displayed slide and highlights the active dot', async () => {
    const user = userEvent.setup()
    render(<TrendingSlider />)

    const second = trendingPosts[1]!
    await user.click(screen.getByRole('button', { name: 'Show trending slide 2' }))

    expect(screen.getByRole('heading', { name: second.title })).toBeInTheDocument()
    expect(screen.getByText(second.excerpt)).toBeInTheDocument()
    const dots = screen.getAllByRole('button', { name: /show trending slide/i })
    expect(dots[0]).not.toHaveClass('bg-accent')
    expect(dots[1]).toHaveClass('bg-accent')
    expect(screen.getByText('Slide 2 of 3')).toBeInTheDocument()
  })
})
