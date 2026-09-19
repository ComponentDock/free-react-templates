import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Philosophy } from './Philosophy'

describe('Philosophy', () => {
  it('renders all three pillar titles', () => {
    render(<Philosophy />)
    expect(screen.getByText('Our Philosophy')).toBeInTheDocument()
    expect(screen.getByText('Academics Principle')).toBeInTheDocument()
    expect(screen.getByText('Key of Success')).toBeInTheDocument()
  })

  it('renders pillar descriptions', () => {
    render(<Philosophy />)
    expect(screen.getByText(/We believe every student/)).toBeInTheDocument()
    expect(screen.getByText(/Our academic principles/)).toBeInTheDocument()
    expect(screen.getByText(/Success comes from/)).toBeInTheDocument()
  })

  it('renders icons', () => {
    const { container } = render(<Philosophy />)
    expect(container.querySelector('svg.lucide-graduation-cap')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-book-open')).toBeInTheDocument()
    expect(container.querySelector('svg.lucide-library')).toBeInTheDocument()
  })
})
