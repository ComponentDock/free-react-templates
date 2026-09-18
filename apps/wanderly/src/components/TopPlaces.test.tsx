import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopPlaces } from './TopPlaces'

describe('TopPlaces', () => {
  it('renders section heading', () => {
    render(<TopPlaces />)
    expect(screen.getByText('Top Places to visit')).toBeInTheDocument()
  })

  it('renders all four destination cards', () => {
    render(<TopPlaces />)
    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Kyoto, Japan')).toBeInTheDocument()
    expect(screen.getByText('Patagonia, Chile')).toBeInTheDocument()
    expect(screen.getByText('Banff, Canada')).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<TopPlaces />)
    const travelTags = screen.getAllByText('Travel')
    expect(travelTags.length).toBe(4)
  })

  it('renders location text for each card', () => {
    render(<TopPlaces />)
    expect(screen.getByText('Cyclades Islands')).toBeInTheDocument()
    expect(screen.getByText('Kansai Region')).toBeInTheDocument()
  })

  it('renders review counts', () => {
    render(<TopPlaces />)
    expect(screen.getByText('(210 reviews)')).toBeInTheDocument()
    expect(screen.getByText('(185 reviews)')).toBeInTheDocument()
  })
})
