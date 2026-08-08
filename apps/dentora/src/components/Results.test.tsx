import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Results } from './Results'

describe('Results', () => {
  it('renders the heading and two before/after treatment pairs', () => {
    render(<Results />)

    expect(screen.getByText('Results')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'See the Difference' }),
    ).toBeInTheDocument()

    expect(screen.getByText('Teeth Whitening')).toBeInTheDocument()
    expect(screen.getByText('Cosmetic Veneers')).toBeInTheDocument()

    expect(screen.getAllByText('Before')).toHaveLength(2)
    expect(screen.getAllByText('After')).toHaveLength(2)

    expect(screen.getByAltText('Teeth Whitening before')).toBeInTheDocument()
    expect(screen.getByAltText('Cosmetic Veneers after')).toBeInTheDocument()
  })
})
