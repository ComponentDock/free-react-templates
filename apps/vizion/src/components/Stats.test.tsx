import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all three stat values', () => {
    render(<Stats />)
    expect(screen.getByText('520')).toBeInTheDocument()
    expect(screen.getByText('244')).toBeInTheDocument()
    expect(screen.getByText('95')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText('On Going Projects')).toBeInTheDocument()
    expect(screen.getByText('Job Success')).toBeInTheDocument()
  })

  it('renders suffix indicators', () => {
    render(<Stats />)
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
  })
})
