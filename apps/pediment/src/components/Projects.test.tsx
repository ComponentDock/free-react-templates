import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Latest projects')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Projects />)
    expect(screen.getByText('Our works')).toBeInTheDocument()
  })

  it('renders all 4 project cards', () => {
    render(<Projects />)
    expect(screen.getAllByRole('img')).toHaveLength(4)
  })

  it('renders project titles', () => {
    render(<Projects />)
    expect(screen.getByText('Lower River Street Astoria')).toBeInTheDocument()
    expect(screen.getByText('Harbor View Residence')).toBeInTheDocument()
    expect(screen.getByText('Metro Center Complex')).toBeInTheDocument()
    expect(screen.getByText('Riverside Loft Studio')).toBeInTheDocument()
  })

  it('renders project categories', () => {
    render(<Projects />)
    const interiors = screen.getAllByText('interiors')
    expect(interiors.length).toBe(2)
    expect(screen.getByText('exteriors')).toBeInTheDocument()
    expect(screen.getByText('planning')).toBeInTheDocument()
  })
})
