import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<About />)
    expect(screen.getByText(/passionate team of designers/)).toBeInTheDocument()
  })

  it('renders sub-feature items', () => {
    render(<About />)
    expect(screen.getByText('Web & Mobile Specialties')).toBeInTheDocument()
    expect(screen.getByText('Intuitive Thinkers')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<About />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(2)
  })
})
