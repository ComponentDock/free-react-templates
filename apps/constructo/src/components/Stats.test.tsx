import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders section title', () => {
    render(<Stats />)
    expect(screen.getByText('Our Achievements')).toBeInTheDocument()
  })

  it('renders all stat values', () => {
    render(<Stats />)
    expect(screen.getByText('800')).toBeInTheDocument()
    expect(screen.getByText('230')).toBeInTheDocument()
    expect(screen.getByText('1390')).toBeInTheDocument()
    expect(screen.getByText('125')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('House Renovations')).toBeInTheDocument()
    expect(screen.getByText('Workers Employed')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
