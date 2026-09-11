import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders stat values', () => {
    render(<Counter />)
    const values = screen.getAllByText('1,172')
    expect(values.length).toBe(2)
    expect(screen.getByText('1,000')).toBeInTheDocument()
    expect(screen.getByText('1,200')).toBeInTheDocument()
  })

  it('shows stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Project Complete')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Total Clients')).toBeInTheDocument()
    expect(screen.getByText('Winning Awards')).toBeInTheDocument()
  })

  it('renders SVG icons for each stat', () => {
    render(<Counter />)
    const svgs = document.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(4)
  })
})
