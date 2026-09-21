import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PopularProgram } from './PopularProgram'

describe('PopularProgram', () => {
  it('renders the section heading', () => {
    render(<PopularProgram />)
    expect(screen.getByText('Popular Program')).toBeInTheDocument()
  })

  it('renders all 6 program cards', () => {
    render(<PopularProgram />)
    expect(screen.getByText('Body Building')).toBeInTheDocument()
    expect(screen.getByText('Body Combat')).toBeInTheDocument()
    expect(screen.getByText('Push Up')).toBeInTheDocument()
    expect(screen.getByText('Weight Lifting')).toBeInTheDocument()
    expect(screen.getByText('Cardio Blast')).toBeInTheDocument()
    expect(screen.getByText('Core Strength')).toBeInTheDocument()
  })

  it('renders Learn More links for each card', () => {
    render(<PopularProgram />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(6)
  })

  it('renders program descriptions', () => {
    render(<PopularProgram />)
    expect(screen.getByText(/Build strength and sculpt your body/)).toBeInTheDocument()
    expect(screen.getByText(/High-energy martial arts/)).toBeInTheDocument()
  })

  it('has an id of program on the section', () => {
    render(<PopularProgram />)
    expect(document.getElementById('program')).toBeTruthy()
  })
})
