import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and a window of four players', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { name: 'Our Team Squad' })).toBeInTheDocument()
    expect(screen.getAllByText('David Scott')).toHaveLength(4)
    expect(screen.getByText('Wide Receiver')).toBeInTheDocument()
    expect(screen.getByText('Tight End')).toBeInTheDocument()
  })

  it('cycles the player carousel with prev/next', async () => {
    const user = userEvent.setup()
    render(<Team />)

    const next = screen.getByRole('button', { name: 'Next players' })
    const prev = screen.getByRole('button', { name: 'Previous players' })

    await user.click(next)
    expect(screen.getAllByText('David Scott')).toHaveLength(4)

    await user.click(prev)
    expect(screen.getByText('Wide Receiver')).toBeInTheDocument()
  })
})
