import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'
import { describe, expect, it } from 'vitest'

describe('Stats', () => {
  it('renders all four stat items', () => {
    render(<Stats />)
    expect(screen.getByText('Happy clients')).toBeInTheDocument()
    expect(screen.getByText('Awards won')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('Projects completed')).toBeInTheDocument()
  })

  it('renders stat values', () => {
    render(<Stats />)
    expect(screen.getByText('451')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
  })

  it('renders the K suffix for Cups of Coffee', () => {
    render(<Stats />)
    expect(screen.getByText('154')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
  })
})
