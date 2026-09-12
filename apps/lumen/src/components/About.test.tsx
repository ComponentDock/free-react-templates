import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('Hello There')).toBeInTheDocument()
    expect(screen.getByText('We Are Lumen')).toBeInTheDocument()
  })

  it('renders all stat counters', () => {
    render(<About />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Awards Received')).toBeInTheDocument()
    expect(screen.getByText('1200')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('95')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
  })
})
