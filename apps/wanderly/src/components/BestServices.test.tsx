import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BestServices } from './BestServices'

describe('BestServices', () => {
  it('renders section heading', () => {
    render(<BestServices />)
    expect(screen.getByText('We offered best services')).toBeInTheDocument()
  })

  it('renders all four services', () => {
    render(<BestServices />)
    expect(screen.getByText('Transportation')).toBeInTheDocument()
    expect(screen.getByText('Guidance')).toBeInTheDocument()
    expect(screen.getByText('Accommodation')).toBeInTheDocument()
    expect(screen.getByText('Discover World')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<BestServices />)
    expect(screen.getByText('All transportation costs we bear')).toBeInTheDocument()
    expect(screen.getByText('We offer the best guidance for you')).toBeInTheDocument()
  })
})
