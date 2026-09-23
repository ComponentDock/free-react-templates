import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Stunning Visuals' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Clean Code' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Punctuality' })).toBeInTheDocument()
  })

  it('has descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/visually compelling designs/i)).toBeInTheDocument()
    expect(screen.getByText(/maintainable, scalable code/i)).toBeInTheDocument()
    expect(screen.getByText(/respect your deadlines/i)).toBeInTheDocument()
  })
})
