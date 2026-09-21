import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /A Passion for Perfect Coffee/i }),
    ).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 3, name: /Hand-Roasted/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /Ethically Sourced/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Fresh Daily/i })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<About />)
    expect(screen.getByText(/Small-batch roasting/i)).toBeInTheDocument()
    expect(screen.getByText(/Direct trade relationships/i)).toBeInTheDocument()
    expect(screen.getByText(/Roasted every morning/i)).toBeInTheDocument()
  })
})
