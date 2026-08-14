import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Candidates } from './Candidates'

describe('Candidates', () => {
  it('renders the subheading and heading', () => {
    render(<Candidates />)
    expect(screen.getByText('Candidates')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Latest Candidates' })).toBeInTheDocument()
  })

  it('renders six candidate cards with names and the location', () => {
    render(<Candidates />)
    for (const name of ['Danica Lewis', 'Nicole Simon', 'Cloe Meyer', 'Rachel Clinton']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Dave Buff')).toHaveLength(2)
    expect(screen.getAllByText('Western City, UK')).toHaveLength(6)
  })
})
