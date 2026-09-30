import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlayerOfMonth } from './PlayerOfMonth'

describe('PlayerOfMonth', () => {
  it('renders the section title, number chip, name and bio', () => {
    render(<PlayerOfMonth />)
    expect(screen.getByRole('heading', { name: 'Player of the month' })).toBeInTheDocument()
    expect(screen.getByText("What's next this month")).toBeInTheDocument()
    expect(screen.getByText('83')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Michael Brooks' })).toBeInTheDocument()
    expect(screen.getByText(/heartbeat of the midfield/i)).toBeInTheDocument()
    expect(screen.getByText(/supporters’ pick/i)).toBeInTheDocument()
  })

  it('renders both player photos with alt text', () => {
    render(<PlayerOfMonth />)
    expect(screen.getByAltText('Michael Brooks in action')).toHaveAttribute(
      'src',
      expect.stringContaining('matchday-player-1'),
    )
    expect(screen.getByAltText('Michael Brooks portrait')).toHaveAttribute(
      'src',
      expect.stringContaining('matchday-player-2'),
    )
  })
})
