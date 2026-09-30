import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LatestResults } from './LatestResults'

describe('LatestResults', () => {
  it('renders the centered title, subtitle and league line', () => {
    render(<LatestResults />)
    expect(screen.getByRole('heading', { name: 'Latest results' })).toBeInTheDocument()
    expect(screen.getByText('a great win in the final')).toBeInTheDocument()
    expect(screen.getByText('Mon 25 Sept, Champions League')).toBeInTheDocument()
  })

  it('renders both mirrored result blocks with scores, teams and photos', () => {
    render(<LatestResults />)
    expect(screen.getByText('The Ravens')).toBeInTheDocument()
    expect(screen.getByText('The Lions')).toBeInTheDocument()
    expect(screen.getAllByText('3').length).toBeGreaterThan(0)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByAltText('The Ravens celebrating')).toHaveAttribute(
      'src',
      expect.stringContaining('matchday-result-1'),
    )
    expect(screen.getByAltText('The Lions in action')).toHaveAttribute(
      'src',
      expect.stringContaining('matchday-result-2'),
    )
  })

  it('shows the See More Info button below the results', () => {
    render(<LatestResults />)
    expect(screen.getByRole('link', { name: 'See More Info' })).toHaveAttribute('href', '#results')
  })
})
