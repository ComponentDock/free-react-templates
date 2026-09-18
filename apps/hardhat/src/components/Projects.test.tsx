import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading and all project cards', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: 'Our Projects' })).toBeInTheDocument()
    const cards = screen.getAllByText('Floride Chemicals')
    expect(cards.length).toBeGreaterThanOrEqual(1)
  })

  it('renders category filter tabs', () => {
    render(<Projects />)

    expect(screen.getByRole('tab', { name: 'Show all' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Interior' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Recent' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Big building' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Park' })).toBeInTheDocument()
  })

  it('filters projects when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    await user.click(screen.getByRole('tab', { name: 'Park' }))
    expect(screen.getByRole('tab', { name: 'Park' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Green Valley Park')).toBeInTheDocument()
  })
})
