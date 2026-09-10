import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Unlimited Colors' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Smart Security' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Endless Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Reliable Design' })).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/Craft stunning visuals/)).toBeInTheDocument()
    expect(screen.getByText(/Enterprise-grade protection/)).toBeInTheDocument()
    expect(screen.getByText(/dedicated team is available/)).toBeInTheDocument()
    expect(screen.getByText(/Pixel-perfect layouts/)).toBeInTheDocument()
  })
})
