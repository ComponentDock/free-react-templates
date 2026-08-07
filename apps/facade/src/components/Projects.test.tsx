import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section title and project cards', () => {
    render(<Projects />)

    expect(screen.getByText('Recent Work')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'View Our Project' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3, name: 'Dell Villa, New York' }).length).toBe(
      2,
    )
    expect(
      screen.getByRole('heading', { level: 3, name: 'Eedn Park, Singapore' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Sky Build, Paris' })).toBeInTheDocument()
    expect(screen.getAllByText('Architecture, Modern Design').length).toBeGreaterThanOrEqual(2)
  })

  it('renders the filter buttons and filters the grid', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    const all = screen.getByRole('button', { name: 'All' })
    const popular = screen.getByRole('button', { name: 'Popular' })
    const latest = screen.getByRole('button', { name: 'Latest' })
    const following = screen.getByRole('button', { name: 'Following' })
    const upcoming = screen.getByRole('button', { name: 'Upcoming' })

    expect(all).toBeInTheDocument()
    expect(popular).toBeInTheDocument()
    expect(latest).toBeInTheDocument()
    expect(following).toBeInTheDocument()
    expect(upcoming).toBeInTheDocument()

    // "Popular" tags only "Sky Build, Paris"
    await user.click(popular)
    expect(screen.getByRole('heading', { level: 3, name: 'Sky Build, Paris' })).toBeInTheDocument()
    expect(
      screen.queryAllByRole('heading', { level: 3, name: 'Dell Villa, New York' }),
    ).toHaveLength(0)
    expect(
      screen.queryByRole('heading', { level: 3, name: 'Eedn Park, Singapore' }),
    ).not.toBeInTheDocument()

    // Back to All restores every card
    await user.click(all)
    expect(screen.getAllByRole('heading', { level: 3, name: 'Dell Villa, New York' }).length).toBe(
      2,
    )
    expect(
      screen.getByRole('heading', { level: 3, name: 'Eedn Park, Singapore' }),
    ).toBeInTheDocument()
  })

  it('shows only following-tagged cards when Following is active', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('button', { name: 'Following' }))
    expect(screen.getAllByRole('heading', { level: 3, name: 'Dell Villa, New York' }).length).toBe(
      2,
    )
    expect(
      screen.queryByRole('heading', { level: 3, name: 'Sky Build, Paris' }),
    ).not.toBeInTheDocument()
  })
})
