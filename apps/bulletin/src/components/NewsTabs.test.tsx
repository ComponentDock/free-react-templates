import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewsTabs } from './NewsTabs'
import { newsPanes, newsTitle, newsTabs } from '../data'

describe('NewsTabs', () => {
  it('shows the heading, four tabs and the Latest pane by default', () => {
    render(<NewsTabs />)

    expect(screen.getByRole('heading', { name: newsTitle })).toBeInTheDocument()
    for (const tab of newsTabs) {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('tab', { name: 'Latest' })).toHaveAttribute('aria-selected', 'true')

    const latestPane = newsPanes.latest
    for (const post of latestPane.large) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
    for (const post of latestPane.small) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('switches panes when a tab is pressed and styles the active tab', async () => {
    const user = userEvent.setup()
    render(<NewsTabs />)

    await user.click(screen.getByRole('tab', { name: 'Popular' }))
    expect(screen.getByRole('tab', { name: 'Popular' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Latest' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByText(newsPanes.popular.large[0]!.title)).toBeInTheDocument()
    expect(screen.queryByText(newsPanes.latest.large[0]!.title)).not.toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'International' }))
    expect(screen.getByText(newsPanes.international.large[0]!.title)).toBeInTheDocument()
    expect(screen.getByText(newsPanes.international.small[0]!.title)).toBeInTheDocument()

    await user.click(screen.getByRole('tab', { name: 'Local' }))
    expect(screen.getByText(newsPanes.local.large[0]!.title)).toBeInTheDocument()
  })
})
