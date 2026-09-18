import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Services')
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('House Renovation')).toBeInTheDocument()
    expect(screen.getByText('Construction Consultant')).toBeInTheDocument()
    expect(screen.getByText('General Contracting')).toBeInTheDocument()
  })

  it('renders Learn More buttons for each service', () => {
    render(<Services />)
    const learnMoreButtons = screen.getAllByRole('link', { name: 'Learn More' })
    expect(learnMoreButtons).toHaveLength(3)
  })

  it('renders View All Services button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: 'View All Services' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/transform existing spaces/i)).toBeInTheDocument()
    expect(screen.getByText(/strategic guidance/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-service general contracting/i)).toBeInTheDocument()
  })
})
