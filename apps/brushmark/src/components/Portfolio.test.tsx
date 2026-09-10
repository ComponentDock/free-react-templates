import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Check Our Recent Client Work')).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Portfolio />)
    const tabs = ['All', 'Popular', 'Latest', 'Following', 'Upcoming']
    for (const tab of tabs) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('renders all 6 portfolio items initially', () => {
    render(<Portfolio />)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('filters items when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Popular' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('shows all items when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Popular' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('filters to Latest items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Latest' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('filters to Following items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Following' }))
    expect(screen.getAllByRole('img')).toHaveLength(1)
  })

  it('filters to Upcoming items', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Upcoming' }))
    expect(screen.getAllByRole('img')).toHaveLength(1)
  })
})
