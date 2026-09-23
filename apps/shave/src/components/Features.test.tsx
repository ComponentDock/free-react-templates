import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/i }),
    ).toBeInTheDocument()
  })

  it('renders all six feature titles', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Expert Technicians' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional Service' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Great Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Technical Skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Highly Recommended' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Positive Reviews' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/skilled barbers/i)).toBeInTheDocument()
    expect(screen.getByText(/top-quality grooming/i)).toBeInTheDocument()
  })
})
