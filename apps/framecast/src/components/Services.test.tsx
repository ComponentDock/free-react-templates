import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the Services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('3D Modeling')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Architectural Design')).toBeInTheDocument()
  })

  it('has description text for each service', () => {
    render(<Services />)
    expect(screen.getByText(/photorealistic 3D models/)).toBeInTheDocument()
    expect(screen.getByText(/User-centered design/)).toBeInTheDocument()
    expect(screen.getByText(/Innovative architectural/)).toBeInTheDocument()
  })
})
