import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedVideos } from './FeaturedVideos'

describe('FeaturedVideos', () => {
  it('renders the section heading', () => {
    render(<FeaturedVideos />)
    expect(screen.getByText('Featured Videos')).toBeInTheDocument()
  })

  it('renders 4 featured video cards', () => {
    render(<FeaturedVideos />)
    expect(screen.getByText(/Global Resorts Network Grn/)).toBeInTheDocument()
    expect(screen.getByText(/A Guide To Rocky Mountain/)).toBeInTheDocument()
    expect(screen.getByText(/American Standards And European/)).toBeInTheDocument()
    expect(screen.getByText(/Mother Earth Hosts Our Travels/)).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<FeaturedVideos />)
    const travelBadges = screen.getAllByText('Travel')
    expect(travelBadges.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
    expect(screen.getByText('Nature')).toBeInTheDocument()
  })
})
