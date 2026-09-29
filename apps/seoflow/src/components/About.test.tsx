import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByText(/We are an SEO company/i)).toBeInTheDocument()
  })

  it('renders the About Us CTA', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /team working together/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/Esteem spirit temper/i)).toBeInTheDocument()
  })
})
