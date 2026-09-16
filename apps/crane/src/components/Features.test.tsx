import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Creative Plan & Design')).toBeInTheDocument()
    expect(screen.getByText('Talented Peoples')).toBeInTheDocument()
    expect(screen.getByText('Modern Tools')).toBeInTheDocument()
  })

  it('renders description text for each feature', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/variations of passages/)
    expect(descriptions.length).toBe(3)
  })
})
