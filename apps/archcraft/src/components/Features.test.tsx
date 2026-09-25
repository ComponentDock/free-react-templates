import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders 3 feature items', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Innovative Structure' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Architectural' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Interior Design' })).toBeInTheDocument()
  })

  it('has descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/cutting-edge structural/)).toBeInTheDocument()
    expect(screen.getByText(/modern aesthetics/)).toBeInTheDocument()
    expect(screen.getByText(/inspiring environments/)).toBeInTheDocument()
  })
})
