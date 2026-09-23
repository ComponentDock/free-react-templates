import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCandidates } from './FeaturedCandidates'

describe('FeaturedCandidates', () => {
  it('renders the heading and 6 candidate cards', () => {
    render(<FeaturedCandidates />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Featured Candidates' }),
    ).toBeInTheDocument()

    const candidateNames = [
      'Alice Johnson',
      'Bob Smith',
      'Clara Davis',
      'David Wilson',
      'Emma Brown',
      'Frank Miller',
    ]

    for (const name of candidateNames) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getAllByText(/Designer|Developer|Manager|Scientist/)).toHaveLength(6)
  })
})
