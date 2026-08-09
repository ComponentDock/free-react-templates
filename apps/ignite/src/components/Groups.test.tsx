import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Groups } from './Groups'

describe('Groups', () => {
  it('renders the heading, blurb, filter chips, group cards, and CTA button', () => {
    render(<Groups />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/SMALL GROUPS/i)
    expect(screen.getByText(/life change happens in circles/i)).toBeInTheDocument()

    for (const chip of ['Guys Groups', 'Girls Groups', 'Co-ed Groups']) {
      expect(screen.getByRole('button', { name: chip })).toBeInTheDocument()
    }

    for (const name of ['The Forge', 'Bloom', 'Foundation', 'Band of Brothers']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Find Your Group' })).toBeInTheDocument()
  })

  it('filters the group cards when a chip is selected', async () => {
    const user = userEvent.setup()
    render(<Groups />)

    await user.click(screen.getByRole('button', { name: 'Girls Groups' }))

    expect(screen.getByText('Bloom')).toBeInTheDocument()
    expect(screen.queryByText('The Forge')).not.toBeInTheDocument()

    // Toggling the chip off restores every group.
    await user.click(screen.getByRole('button', { name: 'Girls Groups' }))

    expect(screen.getByText('The Forge')).toBeInTheDocument()
  })
})
