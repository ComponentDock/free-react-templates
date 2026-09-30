import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { nextMatchRows, recentResultsRows } from '../data'
import { MatchSection } from './MatchSection'

describe('MatchSection', () => {
  it('renders both match columns over the dark photo band', () => {
    render(<MatchSection />)
    expect(screen.getByRole('heading', { level: 3, name: 'Next Match' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Recent Results' })).toBeInTheDocument()
    expect(document.getElementById('schedule')).not.toBeNull()
    expect(document.getElementById('results')).not.toBeNull()
  })

  it('shows VS rows in the Next Match column', () => {
    render(<MatchSection />)
    // one VS mark per next-match row
    expect(screen.getAllByText('VS')).toHaveLength(nextMatchRows.length)
    expect(screen.getAllByText('Cambodia')).toHaveLength(2) // fixture + result row
    expect(screen.getByText(nextMatchRows[0].label)).toBeInTheDocument()
    expect(screen.getByText(nextMatchRows[0].date)).toBeInTheDocument()
  })

  it('shows score rows in the Recent Results column', () => {
    render(<MatchSection />)
    for (const row of recentResultsRows) {
      expect(screen.getByText(row.score!)).toBeInTheDocument()
    }
  })
})
