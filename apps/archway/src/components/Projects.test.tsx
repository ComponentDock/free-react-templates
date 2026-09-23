import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the projects heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Our Projects/i })).toBeInTheDocument()
  })

  it('renders four project cards', () => {
    render(<Projects />)
    expect(screen.getByText('Office Interior Design in Paris')).toBeInTheDocument()
    expect(screen.getByText('Modern Living Room Concept')).toBeInTheDocument()
    expect(screen.getByText('Minimalist Kitchen Design')).toBeInTheDocument()
    expect(screen.getByText('Luxury Bathroom Renovation')).toBeInTheDocument()
  })
})
