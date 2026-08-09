import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the latest projects heading and at least six tiles', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: 'Latest projects' })).toBeInTheDocument()
    const tiles = screen.getAllByRole('img', { name: 'Brown hair wave' })
    expect(tiles.length).toBeGreaterThanOrEqual(6)
  })
})
