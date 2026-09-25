import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Performance } from './Performance'

describe('Performance', () => {
  it('renders both performance row headings', () => {
    render(<Performance />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Street Performance' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Park Skills' })).toBeInTheDocument()
  })

  it('renders images for both rows', () => {
    render(<Performance />)
    expect(screen.getByAltText('Street Performance')).toBeInTheDocument()
    expect(screen.getByAltText('Park Skills')).toBeInTheDocument()
  })

  it('renders checklist items for Street Performance', () => {
    render(<Performance />)
    expect(screen.getByText('Flat ground tricks')).toBeInTheDocument()
    expect(screen.getByText('Rail and ledge combos')).toBeInTheDocument()
    expect(screen.getByText('Stair set mastery')).toBeInTheDocument()
    expect(screen.getByText('Gap techniques')).toBeInTheDocument()
  })

  it('renders checklist items for Park Skills', () => {
    render(<Performance />)
    expect(screen.getByText('Transition fundamentals')).toBeInTheDocument()
    expect(screen.getByText('Bowl and pool riding')).toBeInTheDocument()
    expect(screen.getByText('Vert ramp mastery')).toBeInTheDocument()
    expect(screen.getByText('Flow and lines')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Performance />)
    expect(screen.getByText(/master every aspect of street skateboarding/)).toBeInTheDocument()
    expect(screen.getByText(/advanced transitions, bowl riding/)).toBeInTheDocument()
  })
})
