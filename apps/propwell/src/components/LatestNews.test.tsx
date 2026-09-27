import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading', () => {
    render(<LatestNews />)

    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<LatestNews />)

    expect(screen.getByText(/Stay updated with our/)).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<LatestNews />)

    expect(screen.getByText('How to Choose the Right Property')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Market Trends 2026')).toBeInTheDocument()
    expect(screen.getByText('Tips for First-Time Buyers')).toBeInTheDocument()
  })

  it('displays authors', () => {
    render(<LatestNews />)

    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Williams')).toBeInTheDocument()
  })

  it('displays dates', () => {
    render(<LatestNews />)

    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })

  it('displays excerpts', () => {
    render(<LatestNews />)

    expect(screen.getByText(/Finding the perfect property/)).toBeInTheDocument()
    expect(screen.getByText(/The real estate market is constantly/)).toBeInTheDocument()
    expect(screen.getByText(/Buying your first home/)).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<LatestNews />)

    expect(screen.getByLabelText('Latest news')).toBeInTheDocument()
  })
})
