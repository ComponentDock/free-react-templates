import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesLast } from './FeaturesLast'

describe('FeaturesLast', () => {
  it('renders all four feature titles', () => {
    render(<FeaturesLast />)
    expect(screen.getByText('Scholarship')).toBeInTheDocument()
    expect(screen.getByText('Global Community')).toBeInTheDocument()
    expect(screen.getByText('Job Placement')).toBeInTheDocument()
    expect(screen.getByText('Lifetime Access')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<FeaturesLast />)
    expect(screen.getByText(/Financial aid available/)).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<FeaturesLast />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('renders 4 feature items', () => {
    render(<FeaturesLast />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(4)
  })
})
