import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SectionPanel } from './SectionPanel'

const pills = ['all', 'vogue'] as const
const extraPills = ['sport', 'recipes'] as const

describe('SectionPanel', () => {
  it('renders the title and clickable pills', async () => {
    const user = userEvent.setup()
    const onSelectPill = vi.fn()
    render(
      <SectionPanel
        title="Don't Miss"
        pills={pills}
        activePill="all"
        onSelectPill={onSelectPill}
      />,
    )
    expect(screen.getByRole('heading', { name: "Don't Miss" })).toBeInTheDocument()

    const allPill = screen.getByRole('button', { name: 'all' })
    expect(allPill).toHaveAttribute('aria-pressed', 'true')
    await user.click(allPill)
    expect(onSelectPill).toHaveBeenCalledWith('all')

    await user.click(screen.getByRole('button', { name: 'vogue' }))
    expect(onSelectPill).toHaveBeenCalledWith('vogue')
  })

  it('renders only the title when no pills are given', () => {
    render(<SectionPanel title="Most Popular Videos" />)
    expect(screen.getByRole('heading', { name: 'Most Popular Videos' })).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('does not render the more toggle when no callback is provided', () => {
    render(
      <SectionPanel
        title="Latest Articles"
        pills={pills}
        activePill="all"
        morePills={extraPills}
      />,
    )
    expect(screen.queryByRole('button', { name: 'more' })).not.toBeInTheDocument()
  })

  it('expands and collapses the more pills', async () => {
    const user = userEvent.setup()
    const onSelectPill = vi.fn()
    const onToggleMore = vi.fn()
    render(
      <SectionPanel
        title="Latest Articles"
        pills={pills}
        activePill="all"
        onSelectPill={onSelectPill}
        morePills={extraPills}
        moreOpen={false}
        onToggleMore={onToggleMore}
      />,
    )
    const more = screen.getByRole('button', { name: 'more' })
    expect(more).toHaveAttribute('aria-expanded', 'false')
    await user.click(more)
    expect(onToggleMore).toHaveBeenCalled()
  })

  it('renders the extra pills when open and marks the active one', async () => {
    const user = userEvent.setup()
    const onSelectPill = vi.fn()
    render(
      <SectionPanel
        title="Latest Articles"
        pills={pills}
        activePill="sport"
        onSelectPill={onSelectPill}
        morePills={extraPills}
        moreOpen={true}
        onToggleMore={() => undefined}
      />,
    )
    const sport = screen.getByRole('button', { name: 'sport' })
    expect(sport).toHaveAttribute('aria-pressed', 'true')
    await user.click(sport)
    expect(onSelectPill).toHaveBeenCalledWith('sport')
    expect(screen.getByRole('button', { name: 'recipes' })).toBeInTheDocument()
  })
})
