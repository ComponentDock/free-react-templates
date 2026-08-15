import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VpsTabs } from './VpsTabs'
import { vpsTabs } from '../data'

describe('VpsTabs', () => {
  it('renders the heading, three tabs with the first active, and the first panel', () => {
    render(<VpsTabs />)
    expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument()
    const first = vpsTabs[0]!
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent(first.heading)
    for (const paragraph of first.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })

  it('switches panels when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<VpsTabs />)
    await user.click(screen.getByRole('tab', { name: 'Performance' }))
    expect(screen.getByRole('tab', { name: 'Performance' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tabpanel')).toHaveTextContent(vpsTabs[1]!.heading)
    await user.click(screen.getByRole('tab', { name: 'Effectiveness' }))
    expect(screen.getByRole('tabpanel')).toHaveTextContent(vpsTabs[2]!.heading)
  })
})
