import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProcessSteps } from './ProcessSteps'

describe('ProcessSteps', () => {
  it('renders all six step headings', () => {
    render(<ProcessSteps />)
    expect(screen.getByRole('heading', { name: 'Brainstorm' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Discuss Ideas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Projections' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Strategies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Seo Target' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Awards' })).toBeInTheDocument()
  })

  it('renders the section with process label', () => {
    render(<ProcessSteps />)
    expect(screen.getByRole('region', { name: 'Process steps' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<ProcessSteps className="custom-class" />)
    expect(screen.getByRole('region', { name: 'Process steps' })).toHaveClass('custom-class')
  })
})
