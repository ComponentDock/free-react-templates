import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Innovative Structure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Architectural Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Interior Design' })).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/Cras sit amet nibh libero/)
    expect(descriptions.length).toBe(3)
  })
})
