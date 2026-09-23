import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section header', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Latest Blog Posts/ })).toBeInTheDocument()
  })

  it('renders all five blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Creative Design in 2026')).toBeInTheDocument()
    expect(screen.getByText('Building Scalable Web Applications')).toBeInTheDocument()
    expect(screen.getByText('Branding Tips for Startups')).toBeInTheDocument()
    expect(screen.getByText('UX Principles That Drive Conversions')).toBeInTheDocument()
    expect(screen.getByText('The Power of Color in Design')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })

  it('renders blog post descriptions', () => {
    render(<Blog />)
    expect(screen.getByText(/Exploring emerging trends/)).toBeInTheDocument()
    expect(screen.getByText(/Best practices for architecture/)).toBeInTheDocument()
  })
})
