import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all four feature headings', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Easy Installation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Multiple Layouts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Free Updates' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Fully Responsive' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    const descriptions = screen.getAllByText(/Crafted with attention/)
    expect(descriptions).toHaveLength(4)
  })

  it('renders as a section with features label', () => {
    render(<Features />)
    expect(screen.getByRole('region', { name: 'Features' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Features className="custom-class" />)
    expect(screen.getByRole('region', { name: 'Features' })).toHaveClass('custom-class')
  })
})
