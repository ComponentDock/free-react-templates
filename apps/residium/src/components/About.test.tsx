import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders experience badge', () => {
    render(<About />)
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
  })

  it('renders company name and stats', () => {
    render(<About />)
    expect(screen.getByText(/We are Residium/)).toBeInTheDocument()
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('Buildings')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
  })

  it('renders feature list', () => {
    render(<About />)
    expect(screen.getByText('Premium real estate solutions')).toBeInTheDocument()
    expect(screen.getByText('Experienced professional team')).toBeInTheDocument()
  })
})
