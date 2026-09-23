import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders heading and all four case studies', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('heading', { name: /recent case studies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /business law/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /family law/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /criminal defense/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /personal injury/i })).toBeInTheDocument()
  })

  it('renders images for each case study', () => {
    render(<CaseStudies />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })

  it('renders description text', () => {
    render(<CaseStudies />)
    expect(screen.getByText(/corporate restructuring/i)).toBeInTheDocument()
    expect(screen.getByText(/complex custody/i)).toBeInTheDocument()
  })
})
