import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryTabs } from './CategoryTabs'
import {
  dontMissTitle,
  featuredPanes,
  tabLabels,
  trendingPanes,
  trendingSliderLabel,
  trendingTitle,
} from '../data'

describe('CategoryTabs', () => {
  it('renders the title and nine tabs with the first tab active', () => {
    render(<CategoryTabs title={dontMissTitle} variant="featured" panes={featuredPanes} />)
    expect(screen.getByRole('region', { name: dontMissTitle })).toBeInTheDocument()
    expect(screen.getByText(dontMissTitle)).toBeInTheDocument()

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(tabLabels.length)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Travel' })).toBeInTheDocument()
    // Source typo preserved for fidelity.
    expect(screen.getByRole('tab', { name: 'Politices' })).toBeInTheDocument()
  })

  it('shows a featured card and four stacked posts in the featured variant', () => {
    render(<CategoryTabs title={dontMissTitle} variant="featured" panes={featuredPanes} />)
    const pane = featuredPanes[0]!

    expect(screen.getByRole('heading', { name: pane[0]!.title })).toBeInTheDocument()
    expect(screen.getByText(pane[0]!.excerpt!)).toBeInTheDocument()
    pane.slice(1).forEach((post) => {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    })
  })

  it('swaps the pane content when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<CategoryTabs title={dontMissTitle} variant="featured" panes={featuredPanes} />)

    const firstFeaturedTitle = featuredPanes[0]![0]!.title
    const secondFeaturedTitle = featuredPanes[1]![0]!.title

    await user.click(screen.getByRole('tab', { name: tabLabels[1]! }))
    expect(screen.getByRole('tab', { name: tabLabels[1]! })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('heading', { name: secondFeaturedTitle })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: firstFeaturedTitle })).not.toBeInTheDocument()
  })

  it('renders two columns and the trending slider in the trending variant', () => {
    render(<CategoryTabs title={trendingTitle} variant="trending" panes={trendingPanes} />)
    const pane = trendingPanes[0]!

    expect(screen.getByRole('region', { name: trendingTitle })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: trendingSliderLabel })).toBeInTheDocument()

    // Posts 0-3 appear in the first column AND the slider's first group.
    pane.slice(0, 4).forEach((post) => {
      expect(screen.getAllByRole('link', { name: post.title })).toHaveLength(2)
    })
    // Posts 4-7 appear only in the second column.
    pane.slice(4, 8).forEach((post) => {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    })
  })

  it('swaps the trending pane when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<CategoryTabs title={trendingTitle} variant="trending" panes={trendingPanes} />)

    const firstPane = trendingPanes[0]!
    const thirdPane = trendingPanes[2]!

    await user.click(screen.getByRole('tab', { name: tabLabels[2]! }))
    // The first post of the new pane appears in a column AND the slider.
    expect(screen.getAllByRole('link', { name: thirdPane[0]!.title })).toHaveLength(2)
    expect(screen.queryByRole('link', { name: firstPane[0]!.title })).not.toBeInTheDocument()
  })
})
