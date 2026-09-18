import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryStrip } from './CategoryStrip'

describe('CategoryStrip', () => {
  it('renders all 6 categories', () => {
    render(<CategoryStrip />)
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Books & Magazines')).toBeInTheDocument()
    expect(screen.getByText('Furniture')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Cars & Vehicles')).toBeInTheDocument()
    expect(screen.getByText('Other')).toBeInTheDocument()
  })

  it('renders item counts for each category', () => {
    render(<CategoryStrip />)
    expect(screen.getByText('3,921')).toBeInTheDocument()
    expect(screen.getByText('398')).toBeInTheDocument()
    expect(screen.getByText('1,229')).toBeInTheDocument()
    expect(screen.getByText('32,891')).toBeInTheDocument()
    expect(screen.getByText('29,221')).toBeInTheDocument()
    expect(screen.getByText('219')).toBeInTheDocument()
  })
})
