import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentReviews } from './RecentReviews'

describe('RecentReviews', () => {
  it('renders section heading', () => {
    render(<RecentReviews />)
    expect(screen.getByRole('heading', { name: 'Recent Reviews' })).toBeInTheDocument()
  })

  it('renders 4 review cards', () => {
    render(<RecentReviews />)
    expect(screen.getByText('Cyber Nexus: Awakening')).toBeInTheDocument()
    expect(screen.getByText('Velocity Rush GT')).toBeInTheDocument()
    expect(screen.getByText('Wilderness Protocol')).toBeInTheDocument()
    expect(screen.getByText('Stellar Odyssey')).toBeInTheDocument()
  })

  it('renders rating badges', () => {
    render(<RecentReviews />)
    expect(screen.getByText('9.3')).toBeInTheDocument()
    expect(screen.getByText('9.5')).toBeInTheDocument()
    expect(screen.getByText('9.1')).toBeInTheDocument()
    expect(screen.getByText('9.7')).toBeInTheDocument()
  })

  it('renders review descriptions', () => {
    render(<RecentReviews />)
    expect(screen.getByText(/stunning cyberpunk adventure/)).toBeInTheDocument()
    expect(screen.getByText(/exhilarating racing experience/)).toBeInTheDocument()
    expect(screen.getByText(/gripping survival story/)).toBeInTheDocument()
    expect(screen.getByText(/epic space odyssey/)).toBeInTheDocument()
  })
})
