import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TopProperties } from './TopProperties'

describe('TopProperties', () => {
  it('renders the section heading', () => {
    render(<TopProperties />)
    expect(screen.getByText('Top Property For You')).toBeInTheDocument()
    expect(screen.getByText('Top Properties')).toBeInTheDocument()
  })

  it('renders View All Property link', () => {
    render(<TopProperties />)
    const links = screen.getAllByText('View All Property')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all three property cards', () => {
    render(<TopProperties />)
    expect(screen.getByText('Grand Mansion On Hill')).toBeInTheDocument()
    expect(screen.getByText('Waterfront Estate')).toBeInTheDocument()
    expect(screen.getByText('Mountain Retreat Villa')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<TopProperties />)
    expect(screen.getByText('$4,500,000')).toBeInTheDocument()
    expect(screen.getByText('$3,200,000')).toBeInTheDocument()
    expect(screen.getByText('$2,800,000')).toBeInTheDocument()
  })

  it('renders property descriptions', () => {
    render(<TopProperties />)
    expect(screen.getByText(/A stunning mansion/)).toBeInTheDocument()
    expect(screen.getByText(/Direct oceanfront/)).toBeInTheDocument()
    expect(screen.getByText(/An exclusive alpine/)).toBeInTheDocument()
  })

  it('renders property stats', () => {
    render(<TopProperties />)
    expect(screen.getByText(/8500 Sqft/)).toBeInTheDocument()
    expect(screen.getByText(/6200 Sqft/)).toBeInTheDocument()
    expect(screen.getByText(/5400 Sqft/)).toBeInTheDocument()
  })
})
