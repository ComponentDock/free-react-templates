import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Entertainment } from './Entertainment'

describe('Entertainment', () => {
  it('renders the heading and default content', () => {
    render(<Entertainment />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Entertainment')
    expect(screen.getByText(/Award Season Preview/)).toBeInTheDocument()
  })

  it('switches sub-category tabs', async () => {
    const user = userEvent.setup()
    render(<Entertainment />)
    await user.click(screen.getByRole('tab', { name: 'Movies' }))
    expect(screen.getByText('Top 10 Movies This Month')).toBeInTheDocument()
    expect(screen.queryByText('Award Season Preview')).not.toBeInTheDocument()
  })

  it('renders the View all link', () => {
    render(<Entertainment />)
    expect(screen.getByText('View all')).toBeInTheDocument()
  })

  it('marks active tab with aria-selected', async () => {
    const user = userEvent.setup()
    render(<Entertainment />)
    expect(screen.getByRole('tab', { name: 'All' })).toHaveAttribute('aria-selected', 'true')
    await user.click(screen.getByRole('tab', { name: 'Music' }))
    expect(screen.getByRole('tab', { name: 'Music' })).toHaveAttribute('aria-selected', 'true')
  })
})
