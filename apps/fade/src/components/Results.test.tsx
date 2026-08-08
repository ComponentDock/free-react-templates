import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Results } from './Results'

describe('Results', () => {
  it('renders the heading and at least two transformation cards', () => {
    render(<Results />)

    expect(screen.getByText('Transformations')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'See the Difference' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: 'Classic Fade Transformation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Beard Grooming & Shaping' }),
    ).toBeInTheDocument()
  })
})
