import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScienceUpdate } from './ScienceUpdate'

describe('ScienceUpdate', () => {
  it('renders the section title', () => {
    render(<ScienceUpdate />)
    expect(screen.getByText('Science Update')).toBeInTheDocument()
  })

  it('renders four story cards', () => {
    render(<ScienceUpdate />)
    expect(
      screen.getByText('26 last-minute holiday gifts that are still thoughtful and unique'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('The Amex Business Platinum vs. the Amex Business Gold'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Lights that warn planes of obstacles were exposed to Open Internet'),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Substituting 'follow your passion' with 'find your purpose'"),
    ).toBeInTheDocument()
  })

  it('renders the See All link', () => {
    render(<ScienceUpdate />)
    expect(screen.getByText('See All')).toBeInTheDocument()
  })

  it('renders kicker tags', () => {
    render(<ScienceUpdate />)
    const scienceKickers = screen.getAllByText('Science')
    expect(scienceKickers.length).toBeGreaterThanOrEqual(1)
  })

  it('renders bylines', () => {
    render(<ScienceUpdate />)
    expect(screen.getByText('by Emily R.')).toBeInTheDocument()
    expect(screen.getByText('by David K.')).toBeInTheDocument()
    expect(screen.getByText('by Marcus T.')).toBeInTheDocument()
  })
})
