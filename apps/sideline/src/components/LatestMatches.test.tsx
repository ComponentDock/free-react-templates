import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { LatestMatches } from './LatestMatches'

describe('LatestMatches', () => {
  it('renders the heading, pill tabs and the first fixture pane', () => {
    render(<LatestMatches />)
    expect(screen.getByText('Latest Matches')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Match 1' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Match 2' })).toHaveAttribute('aria-selected', 'false')
    // First pane rows (ARIA tabpanel wiring).
    expect(screen.getByText('Harbor Hawks')).toBeInTheDocument()
    expect(screen.getByText('Riveters')).toBeInTheDocument()
  })

  it('switches panes when a tab is activated', async () => {
    const user = userEvent.setup()
    render(<LatestMatches />)
    await user.click(screen.getByRole('tab', { name: 'Match 2' }))

    expect(screen.getByRole('tab', { name: 'Match 2' })).toHaveAttribute('aria-selected', 'true')
    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-match-2')
    expect(screen.getByText('Pilgrims')).toBeInTheDocument()
    // Inactive pane content is absent from the DOM.
    expect(screen.queryByText('Riveters')).not.toBeInTheDocument()
  })
})
