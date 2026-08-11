import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TrendingSlider } from './TrendingSlider'
import { nextSlideLabel, previousSlideLabel, trendingPanes, trendingSliderLabel } from '../data'

describe('TrendingSlider', () => {
  it('renders the first group of four posts', () => {
    render(<TrendingSlider posts={trendingPanes[0]!} />)
    const pane = trendingPanes[0]!

    expect(screen.getByRole('region', { name: trendingSliderLabel })).toBeInTheDocument()
    pane.slice(0, 4).forEach((post) => {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    })
    expect(screen.queryByRole('link', { name: pane[4]!.title })).not.toBeInTheDocument()
  })

  it('advances to the second group and wraps back', async () => {
    const user = userEvent.setup()
    render(<TrendingSlider posts={trendingPanes[0]!} />)
    const pane = trendingPanes[0]!

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('link', { name: pane[4]!.title })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: pane[0]!.title })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('link', { name: pane[0]!.title })).toBeInTheDocument()
  })

  it('wraps backward via the previous button', async () => {
    const user = userEvent.setup()
    render(<TrendingSlider posts={trendingPanes[0]!} />)
    const pane = trendingPanes[0]!

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('link', { name: pane[4]!.title })).toBeInTheDocument()
  })
})
