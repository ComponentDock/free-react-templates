import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards titled "Latest instoment"', () => {
    render(<Features />)

    const cards = screen.getAllByRole('heading', { level: 3, name: 'Latest instoment' })
    expect(cards).toHaveLength(3)
    expect(screen.getByText(/movement assessment/)).toBeInTheDocument()
    expect(screen.getByText(/periodized weekly/)).toBeInTheDocument()
    expect(screen.getByText(/form checks on every lift/)).toBeInTheDocument()
  })
})
