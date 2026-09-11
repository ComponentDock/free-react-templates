import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<About />)
    expect(screen.getByText('Web & Mobile Specialties')).toBeInTheDocument()
    expect(screen.getByText('Intuitive Thinkers')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<About />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(2)
  })

  it('renders description', () => {
    render(<About />)
    expect(screen.getByText(/We are a creative agency/)).toBeInTheDocument()
  })
})
