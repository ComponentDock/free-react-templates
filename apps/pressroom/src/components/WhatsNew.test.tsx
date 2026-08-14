import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WhatsNew } from './WhatsNew'
import { WHATS_NEW_TABS } from '../data'

describe('WhatsNew', () => {
  it('renders the heading and all category tabs', () => {
    render(<WhatsNew />)
    expect(screen.getByRole('heading', { name: 'Whats New' })).toBeInTheDocument()
    for (const tab of WHATS_NEW_TABS) {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument()
    }
  })

  it('shows the first category cards by default', () => {
    render(<WhatsNew />)
    expect(screen.getByRole('tab', { name: WHATS_NEW_TABS[0]!.label })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText(WHATS_NEW_TABS[0]!.cards[0]!.title)).toBeInTheDocument()
  })

  it('switches the card grid when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<WhatsNew />)
    await user.click(screen.getByRole('tab', { name: 'Travel' }))
    expect(screen.getByRole('tab', { name: 'Travel' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(WHATS_NEW_TABS[1]!.cards[0]!.title)).toBeInTheDocument()
    expect(screen.queryByText(WHATS_NEW_TABS[0]!.cards[0]!.title)).not.toBeInTheDocument()
  })

  it('renders bylines on news cards', () => {
    render(<WhatsNew />)
    expect(screen.getAllByText(/by Alice cloe/).length).toBeGreaterThan(0)
  })
})
