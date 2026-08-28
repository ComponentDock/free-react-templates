import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat values', () => {
    render(<Stats />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('280')).toBeInTheDocument()
  })

  it('renders stat suffixes', () => {
    render(<Stats />)
    const suffixes = screen.getAllByText('+')
    expect(suffixes.length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('K')).toBeInTheDocument()
  })

  it('renders stat descriptions', () => {
    render(<Stats />)
    const descs = screen.getAllByText(/List of any and all companies/)
    expect(descs).toHaveLength(4)
  })
})
