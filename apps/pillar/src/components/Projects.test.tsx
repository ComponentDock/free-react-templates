import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the projects heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Awesome Projects' })).toBeInTheDocument()
  })

  it('renders six project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Butterfly House')).toBeInTheDocument()
    expect(screen.getByText('Interior Bed Design')).toBeInTheDocument()
    expect(screen.getByText('Kitchen Sink Design')).toBeInTheDocument()
    expect(screen.getByText('Lobby Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Relaxation Room Design')).toBeInTheDocument()
    expect(screen.getByText('Modern Office Space')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<Projects />)
    const interiors = screen.getAllByText('Interior')
    expect(interiors.length).toBe(3)
    const designs = screen.getAllByText('Design')
    expect(designs.length).toBe(3)
  })
})
