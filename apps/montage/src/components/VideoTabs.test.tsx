import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoTabs } from './VideoTabs'
import { nextLabel, prevLabel, tabCards, videoTabs } from '../data'

const gridSelector = '.grid.gap-6'

describe('VideoTabs', () => {
  it('renders the three tabs with Latest active by default', () => {
    render(<VideoTabs />)
    const section = screen.getByRole('region', { name: 'Video carousels' })
    for (const tab of videoTabs) {
      expect(within(section).getByRole('tab', { name: tab.label })).toBeInTheDocument()
    }
    expect(within(section).getByRole('tab', { name: 'Latest' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(within(section).getByRole('tab', { name: 'Top Viewed' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
  })

  it('shows the Latest cards by default', () => {
    render(<VideoTabs />)
    const section = screen.getByRole('region', { name: 'Video carousels' })
    for (const card of tabCards.latest) {
      expect(within(section).getByRole('heading', { name: card.title })).toBeInTheDocument()
    }
    expect(within(section).getAllByText('James Smith').length).toBeGreaterThan(0)
  })

  it('switches to the Top Viewed tab and shows its card order', async () => {
    const user = userEvent.setup()
    render(<VideoTabs />)
    const section = screen.getByRole('region', { name: 'Video carousels' })
    await user.click(within(section).getByRole('tab', { name: 'Top Viewed' }))
    expect(within(section).getByRole('tab', { name: 'Top Viewed' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    const grid = section.querySelector(gridSelector)
    expect(grid?.querySelector('h3')?.textContent).toBe(tabCards.topViewed[0]!.title)
  })

  it('rotates the card row with the next and prev controls', async () => {
    const user = userEvent.setup()
    render(<VideoTabs />)
    const section = screen.getByRole('region', { name: 'Video carousels' })
    const grid = section.querySelector(gridSelector)
    expect(grid?.querySelector('h3')?.textContent).toBe(tabCards.latest[0]!.title)
    await user.click(within(section).getByRole('button', { name: nextLabel }))
    expect(grid?.querySelector('h3')?.textContent).toBe(tabCards.latest[1]!.title)
    await user.click(within(section).getByRole('button', { name: prevLabel }))
    expect(grid?.querySelector('h3')?.textContent).toBe(tabCards.latest[0]!.title)
  })

  it('resets the rotation when switching tabs', async () => {
    const user = userEvent.setup()
    render(<VideoTabs />)
    const section = screen.getByRole('region', { name: 'Video carousels' })
    const grid = section.querySelector(gridSelector)
    await user.click(within(section).getByRole('button', { name: nextLabel }))
    expect(grid?.querySelector('h3')?.textContent).toBe(tabCards.latest[1]!.title)
    await user.click(within(section).getByRole('tab', { name: 'See All Videos' }))
    expect(grid?.querySelector('h3')?.textContent).toBe(tabCards.seeAll[0]!.title)
  })
})
