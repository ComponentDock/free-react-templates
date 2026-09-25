import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading and 6 project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Our Projects' })).toBeInTheDocument()
    expect(screen.getByText('Butterfly House')).toBeInTheDocument()
    expect(screen.getByText('Interior Bed Design')).toBeInTheDocument()
    expect(screen.getByText('Kitchen Sink Design')).toBeInTheDocument()
    expect(screen.getByText('Lobby Interior')).toBeInTheDocument()
    expect(screen.getByText('Relaxation Room')).toBeInTheDocument()
    expect(screen.getByText('Modern Villa')).toBeInTheDocument()
  })

  it('shows category for each project', () => {
    render(<Projects />)
    const interiorCategories = screen.getAllByText('Interior')
    expect(interiorCategories.length).toBeGreaterThanOrEqual(3)
  })
})
