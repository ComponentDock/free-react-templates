import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about heading', () => {
    render(<About />)
    expect(screen.getByText(/brand experts with \+10y/i)).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<About />)
    expect(screen.getByText(/class aptent taciti/i)).toBeInTheDocument()
  })

  it('renders discover it button', () => {
    render(<About />)
    expect(screen.getByText(/discover it/i)).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByAltText('About Vibrance')).toBeInTheDocument()
  })
})
