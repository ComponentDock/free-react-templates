import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('shows the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /All Fighter/i })).toBeInTheDocument()
  })

  it('renders at least six gallery tiles with captions', () => {
    render(<Gallery />)
    const tiles = screen.getAllByRole('img', { name: /Fighter \d+ — arena showdown/i })
    expect(tiles.length).toBeGreaterThanOrEqual(6)
    expect(screen.getByText('Fighter 1 — arena showdown')).toBeInTheDocument()
  })
})
