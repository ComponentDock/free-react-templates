import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
  })

  it('renders bio text', () => {
    render(<About />)
    expect(screen.getByText(/passionate photographer/)).toBeInTheDocument()
  })

  it('renders all four skill labels with percentages', () => {
    render(<About />)
    expect(screen.getByText('Photographer')).toBeInTheDocument()
    expect(screen.getByText('89%')).toBeInTheDocument()
    expect(screen.getByText('Wedding')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getAllByText('94%')).toHaveLength(2)
    expect(screen.getByText('Conferences')).toBeInTheDocument()
  })
})
