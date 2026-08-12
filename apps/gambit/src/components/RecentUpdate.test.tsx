import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecentUpdate } from './RecentUpdate'
import { RECENT_TABS } from '../data'

describe('RecentUpdate', () => {
  it('renders three tab pills with the first one active', () => {
    render(<RecentUpdate />)
    for (const tab of RECENT_TABS) {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('tab', { name: 'Live Streaming' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('shows the first pane by default with a Learn More button', () => {
    render(<RecentUpdate />)
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(RECENT_TABS[0].heading)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('switches the visible pane when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<RecentUpdate />)
    await user.click(screen.getByRole('tab', { name: 'Upcoming Challenges' }))
    expect(screen.getByRole('tab', { name: 'Upcoming Challenges' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(RECENT_TABS[1].heading)

    await user.click(screen.getByRole('tab', { name: 'Recent Famous Games' }))
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(RECENT_TABS[2].heading)
  })
})
