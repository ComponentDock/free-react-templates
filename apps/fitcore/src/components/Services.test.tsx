import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services For You')).toBeInTheDocument()
    expect(screen.getByText(/Push Your Limits Forward/)).toBeInTheDocument()
  })

  it('shows three service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Quality Equipment' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Health Caring' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Gym Strategies' })).toBeInTheDocument()
  })

  it('shows descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Premium-grade machines/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive wellness/)).toBeInTheDocument()
    expect(screen.getByText(/Structured training methodologies/)).toBeInTheDocument()
  })

  it('has a More Services link', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: 'More Services' })).toHaveAttribute('href', '#services')
  })

  it('shows discover more links for each card', () => {
    render(<Services />)
    const discoverLinks = screen.getAllByText(/Discover More About Us/)
    expect(discoverLinks).toHaveLength(3)
  })
})
