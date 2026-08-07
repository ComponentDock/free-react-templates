import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three "A Volunteer" tiles with titles and blurbs', () => {
    render(<Features />)

    const tiles = screen.getAllByRole('heading', { level: 3, name: 'A Volunteer' })
    expect(tiles).toHaveLength(3)
  })

  it('renders the featured split with stats and a Learn More link', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Featured' })).toBeInTheDocument()

    expect(screen.getByText('50k')).toBeInTheDocument()
    expect(screen.getByText(/Total Volunteers/)).toBeInTheDocument()
    expect(screen.getByText('100k')).toBeInTheDocument()
    expect(screen.getByText(/Successful Missions/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Learn More/ })).toBeInTheDocument()
  })
})
