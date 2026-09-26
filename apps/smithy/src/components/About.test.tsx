import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /let/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About Alex Smith')).toBeInTheDocument()
  })

  it('renders the about paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/passionate web developer/)).toBeInTheDocument()
    expect(screen.getByText(/specialize in building/)).toBeInTheDocument()
  })

  it('renders the Download CV button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /download cv/i })).toBeInTheDocument()
  })
})
