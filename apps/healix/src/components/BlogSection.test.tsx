import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: /latest blog updates/i })).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<BlogSection />)
    expect(screen.getByText(/scary thing/i)).toBeInTheDocument()
    expect(screen.getByText(/most important things/i)).toBeInTheDocument()
    expect(screen.getByText(/steps to start/i)).toBeInTheDocument()
  })

  it('renders read more links', () => {
    render(<BlogSection />)
    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks.length).toBe(3)
  })

  it('renders post dates', () => {
    render(<BlogSection />)
    expect(screen.getByText('Oct 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('Oct 14, 2024')).toBeInTheDocument()
    expect(screen.getByText('Oct 13, 2024')).toBeInTheDocument()
  })
})
