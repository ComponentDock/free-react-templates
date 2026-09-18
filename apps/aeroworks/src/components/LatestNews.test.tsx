import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the heading', () => {
    render(<LatestNews />)
    expect(screen.getByText('Latest News Updates')).toBeInTheDocument()
  })

  it('renders all 3 blog post cards', () => {
    render(<LatestNews />)
    const titles = [
      'Top 10 Cars for Family Road Trips',
      'Electric vs Hybrid: Which Is Right for You?',
      'Car Maintenance Tips for Winter',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders dates for each post', () => {
    render(<LatestNews />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 8, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })

  it('renders excerpts', () => {
    render(<LatestNews />)
    expect(screen.getByText(/best vehicles for long-distance/)).toBeInTheDocument()
    expect(screen.getByText(/comprehensive comparison/)).toBeInTheDocument()
    expect(screen.getByText(/Keep your vehicle in top shape/)).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<LatestNews />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
