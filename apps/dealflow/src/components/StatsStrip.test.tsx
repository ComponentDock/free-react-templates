import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsStrip } from './StatsStrip'

describe('StatsStrip', () => {
  it('renders the four animated stats with labels', () => {
    render(<StatsStrip />)

    expect(screen.getByText('10K+')).toBeInTheDocument()
    expect(screen.getByText('Teams Worldwide')).toBeInTheDocument()
    expect(screen.getByText('50M+')).toBeInTheDocument()
    expect(screen.getByText('Deals Tracked')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getByText('Uptime SLA')).toBeInTheDocument()
    expect(screen.getByText('$2.1B')).toBeInTheDocument()
    expect(screen.getByText('Revenue Generated')).toBeInTheDocument()
  })
})
