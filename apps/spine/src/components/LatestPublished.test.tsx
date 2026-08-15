import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LatestPublished } from './LatestPublished'
import { browseMoreLabel, latestBooks, latestTabs, latestTitle } from '../data'

describe('LatestPublished', () => {
  it('renders the title and five pill tabs with All active on load', () => {
    render(<LatestPublished />)

    expect(screen.getByRole('heading', { level: 2, name: latestTitle })).toBeInTheDocument()

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(latestTabs.length)
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Horror' })).toHaveAttribute('aria-selected', 'false')
  })

  it('shows five bordered book cards in the active panel', () => {
    const { container } = render(<LatestPublished />)

    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getAllByRole('heading', { level: 3 })).toHaveLength(latestBooks.length)
    const cards = panel.querySelectorAll('article')
    expect(cards).toHaveLength(latestBooks.length)
    for (const card of cards) {
      expect(card.className).toContain('border')
    }
    expect(container.querySelectorAll('img')).toHaveLength(latestBooks.length)
  })

  it('switches panels when another tab is activated', () => {
    render(<LatestPublished />)

    fireEvent.click(screen.getByRole('tab', { name: 'Horror' }))
    expect(screen.getByRole('tab', { name: 'Horror' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tabpanel').getAttribute('aria-labelledby')).toBe('latest-tab-1')
    expect(within(screen.getByRole('tabpanel')).getAllByRole('heading', { level: 3 })).toHaveLength(
      latestBooks.length,
    )
  })

  it('activates a tab with the keyboard', async () => {
    const user = userEvent.setup()
    render(<LatestPublished />)

    const thriller = screen.getByRole('tab', { name: 'Thriller' })
    thriller.focus()
    await user.keyboard('{Enter}')
    expect(screen.getByRole('tab', { name: 'Thriller' })).toHaveAttribute('aria-selected', 'true')
  })

  it('renders the red-outline Browse More button', () => {
    render(<LatestPublished />)

    const browseMore = screen.getByRole('button', { name: browseMoreLabel })
    expect(browseMore.className).toContain('border-brand')
    expect(browseMore.className).toContain('text-brand')
  })
})
