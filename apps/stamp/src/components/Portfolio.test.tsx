import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText(/Recent Completed/)).toBeInTheDocument()
  })

  it('renders 4 project cards', () => {
    render(<Portfolio />)
    expect(screen.getByText('Electrical Engineering')).toBeInTheDocument()
    expect(screen.getByText('Chemical Processing')).toBeInTheDocument()
    expect(screen.getByText('Structural Analysis')).toBeInTheDocument()
    expect(screen.getByText('Industrial Automation')).toBeInTheDocument()
  })

  it('renders the More Projects CTA', () => {
    render(<Portfolio />)
    expect(screen.getByText('More Projects')).toBeInTheDocument()
  })

  it('renders Read More links on project cards', () => {
    render(<Portfolio />)
    const readMoreLinks = screen.getAllByText('Read More →')
    expect(readMoreLinks.length).toBe(4)
  })
})
