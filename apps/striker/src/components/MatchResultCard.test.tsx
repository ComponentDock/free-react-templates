import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { matchResult } from '../data'
import { MatchResultCard } from './MatchResultCard'

describe('MatchResultCard', () => {
  it('overlaps the hero with the rounded dark result card', () => {
    render(<MatchResultCard />)
    const section = document.getElementById('matches')
    expect(section).not.toBeNull()
    expect(section).toHaveClass('-mt-[90px]')
    expect(section!.querySelector('.rounded-\\[10px\\]')).toHaveClass('bg-card')
  })

  it('shows the centered score between the two team halves', () => {
    render(<MatchResultCard />)
    expect(screen.getByText(matchResult.score)).toBeInTheDocument()
  })

  it('renders the home half with the winning team and its scorers', () => {
    render(<MatchResultCard />)
    expect(screen.getByText(/LA LEGA/)).toBeInTheDocument()
    expect(screen.getByText(matchResult.home.result)).toBeInTheDocument()
    for (const scorer of matchResult.home.scorers) {
      expect(screen.getByText(`${scorer.name} (${scorer.number})`)).toBeInTheDocument()
    }
  })

  it('renders the red away half with a diagonal split and its scorers', () => {
    render(<MatchResultCard />)
    expect(screen.getByText(/JUVENDU/)).toBeInTheDocument()
    expect(screen.getByText(matchResult.away.result)).toBeInTheDocument()
    for (const scorer of matchResult.away.scorers) {
      expect(screen.getByText(`${scorer.name} (${scorer.number})`)).toBeInTheDocument()
    }
    const redHalf = screen.getByText(/JUVENDU/).closest('.bg-brand')
    expect(redHalf).not.toBeNull()
    expect(redHalf!.className).toContain('clip-path')
  })
})
