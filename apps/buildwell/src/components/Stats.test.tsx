import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four stat values', () => {
    render(<Stats />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('154')).toBeInTheDocument()
    expect(screen.getByText('785')).toBeInTheDocument()
    expect(screen.getByText('14')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
