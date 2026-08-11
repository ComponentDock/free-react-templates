import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import {
  closeSearchLabel,
  documentTitle,
  dontMissTitle,
  featuredPanes,
  heroLabel,
  heroPostStripLabel,
  heroSlidesLabel,
  loadMoreLabel,
  menuCloseLabel,
  menuOpenLabel,
  openSearchLabel,
  sidebarLabel,
  skipLabel,
  tabLabels,
  trendingSliderLabel,
  trendingTitle,
} from './data'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe(documentTitle)
  })

  it('composes all sections with proper landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: sidebarLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: skipLabel })).toBeInTheDocument()

    expect(screen.getByRole('region', { name: heroLabel })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: heroSlidesLabel })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: heroPostStripLabel })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: dontMissTitle })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: trendingTitle })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: trendingSliderLabel })).toBeInTheDocument()

    expect(screen.getByText(dontMissTitle)).toBeInTheDocument()
    expect(screen.getByText(trendingTitle)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: loadMoreLabel })).toBeInTheDocument()
  })

  it('renders nine tabs in each of the two tabbed sections', () => {
    render(<App />)
    expect(screen.getAllByRole('tab')).toHaveLength(tabLabels.length * 2)
  })

  it("switches the featured pane in the Don't Miss section", async () => {
    const user = userEvent.setup()
    render(<App />)

    const dontMiss = within(screen.getByRole('region', { name: dontMissTitle }))
    const tabs = dontMiss.getAllByRole('tab')

    await user.click(tabs[1]!)
    expect(dontMiss.getByRole('tab', { name: tabLabels[1]! })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(dontMiss.getByRole('heading', { name: featuredPanes[1]![0]!.title })).toBeInTheDocument()
  })

  it('opens and closes the search overlay', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByRole('search')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
