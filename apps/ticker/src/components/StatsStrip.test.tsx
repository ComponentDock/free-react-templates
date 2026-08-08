import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsStrip } from './StatsStrip'

describe('StatsStrip', () => {
  it('shows the three figures and their captions', () => {
    render(<StatsStrip />)

    expect(screen.getByText('156')).toBeInTheDocument()
    expect(screen.getByText('73%')).toBeInTheDocument()
    expect(screen.getByText('2.4')).toBeInTheDocument()

    expect(screen.getByText('Combined profits from our trading community')).toBeInTheDocument()
    expect(screen.getByText('Across all verified student trades')).toBeInTheDocument()
    expect(screen.getByText('Learning and trading with us daily')).toBeInTheDocument()
  })
})
