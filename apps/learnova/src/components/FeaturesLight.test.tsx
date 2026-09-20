import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesLight } from './FeaturesLight'

describe('FeaturesLight', () => {
  it('renders all four feature titles', () => {
    render(<FeaturesLight />)
    expect(screen.getByText('Expert Teachers')).toBeInTheDocument()
    expect(screen.getByText('Certified Programs')).toBeInTheDocument()
    expect(screen.getByText('Online Learning')).toBeInTheDocument()
    expect(screen.getByText('Book Library')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<FeaturesLight />)
    expect(screen.getByText(/Learn from industry experts/)).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<FeaturesLight />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('renders 4 feature items', () => {
    render(<FeaturesLight />)
    const items = screen.getAllByRole('article')
    expect(items).toHaveLength(4)
  })
})
