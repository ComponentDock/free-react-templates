import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /life coaching/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /business coaching/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /career coaching/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /wellness coaching/i })).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/discover your purpose and create a roadmap/i)).toBeInTheDocument()
    expect(screen.getByText(/scale your business with proven strategies/i)).toBeInTheDocument()
  })
})
