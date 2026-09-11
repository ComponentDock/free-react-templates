import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the three feature cards', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Certified Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'The Great Teamwork' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Modern Technology' })).toBeInTheDocument()
  })

  it('renders the About Us section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<About />)
    const links = screen.getAllByText(/Read more/)
    expect(links.length).toBe(3)
  })
})
