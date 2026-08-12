import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders four feature cards alternating cyan and dark with View Details links', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'Spreading Light to world' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spreading Peace to world' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spread Happyness to world' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Spreading Joy to world' })).toBeInTheDocument()

    const details = screen.getAllByRole('link', { name: 'View Details' })
    expect(details).toHaveLength(4)
  })
})
