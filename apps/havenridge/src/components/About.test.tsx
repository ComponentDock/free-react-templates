import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('Havenridge A Real Estate Company')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(/Havenridge has been a trusted name/i)).toBeInTheDocument()
  })

  it('renders all 4 stat counters', () => {
    render(<About />)
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('Years')).toBeInTheDocument()
    expect(screen.getByText('210K+')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('450')).toBeInTheDocument()
    expect(screen.getByText('Realtors')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Branches')).toBeInTheDocument()
  })
})
