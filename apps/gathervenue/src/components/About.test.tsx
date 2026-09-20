import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section title with brand accent', () => {
    render(<About />)
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/event/i)).toHaveClass('text-brand')
  })

  it('renders description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/brightest minds/i)).toBeInTheDocument()
  })

  it('renders all 4 stat counters', () => {
    render(<About />)
    expect(screen.getByText(/hours/i)).toBeInTheDocument()
    expect(screen.getByText(/venues/i)).toBeInTheDocument()
    expect(screen.getByText(/country/i)).toBeInTheDocument()
    expect(screen.getByText(/speakers/i)).toBeInTheDocument()
  })

  it('displays correct stat values', () => {
    render(<About />)
    expect(screen.getByText('900+')).toBeInTheDocument()
    expect(screen.getByText('750+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
  })
})
