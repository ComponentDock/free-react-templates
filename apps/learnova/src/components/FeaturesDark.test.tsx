import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesDark } from './FeaturesDark'

describe('FeaturesDark', () => {
  it('renders all four feature titles', () => {
    render(<FeaturesDark />)
    expect(screen.getByText('Expert Teachers')).toBeInTheDocument()
    expect(screen.getByText('Certified Programs')).toBeInTheDocument()
    expect(screen.getByText('Online Learning')).toBeInTheDocument()
    expect(screen.getByText('Book Library')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<FeaturesDark />)
    expect(screen.getByText(/Learn from industry experts/)).toBeInTheDocument()
    expect(screen.getByText(/Accredited courses/)).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<FeaturesDark />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('renders 4 feature items', () => {
    render(<FeaturesDark />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(4)
  })
})
