import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Results } from './Results'

describe('Results', () => {
  it('renders the heading and two before/after transformation pairs', () => {
    render(<Results />)

    expect(screen.getByText('Our Work')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Project Transformations' }),
    ).toBeInTheDocument()

    expect(screen.getByText('Home Renovation')).toBeInTheDocument()
    expect(screen.getByText('Kitchen Remodel')).toBeInTheDocument()

    expect(screen.getAllByText('Before')).toHaveLength(2)
    expect(screen.getAllByText('After')).toHaveLength(2)

    expect(screen.getByAltText('Home Renovation before')).toBeInTheDocument()
    expect(screen.getByAltText('Kitchen Remodel after')).toBeInTheDocument()
  })
})
