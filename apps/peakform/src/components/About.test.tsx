import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the about section', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: /about us/i })).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<About />)
    expect(screen.getByText(/about us/i)).toBeInTheDocument()
  })

  it('renders checklist items', () => {
    render(<About />)
    expect(screen.getByText(/professional trainers/i)).toBeInTheDocument()
    expect(screen.getByText(/opening hours/i)).toBeInTheDocument()
    expect(screen.getByText(/flexible schedule/i)).toBeInTheDocument()
    expect(screen.getByText(/affordable price/i)).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /about peakform/i })
    expect(img).toBeInTheDocument()
  })
})
