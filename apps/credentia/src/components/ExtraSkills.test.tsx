import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExtraSkills } from './ExtraSkills'

describe('ExtraSkills', () => {
  it('renders the section heading', () => {
    render(<ExtraSkills />)
    expect(screen.getByText('Extra Skills')).toBeInTheDocument()
  })

  it('renders skill percentages', () => {
    render(<ExtraSkills />)
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('83%')).toBeInTheDocument()
  })

  it('renders skill labels', () => {
    render(<ExtraSkills />)
    expect(screen.getByText('Inspiration')).toBeInTheDocument()
    expect(screen.getByText('Creativity')).toBeInTheDocument()
  })

  it('renders stat values', () => {
    render(<ExtraSkills />)
    expect(screen.getByText('14')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<ExtraSkills />)
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})
