import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders section title', () => {
    render(<LatestNews />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('curated experiences')).toBeInTheDocument()
  })

  it('renders all news titles', () => {
    render(<LatestNews />)
    expect(screen.getByText('10 Hidden Gems in Southeast Asia')).toBeInTheDocument()
    expect(screen.getByText('How to Pack Light for Any Trip')).toBeInTheDocument()
    expect(screen.getByText('The Ultimate Guide to Solo Travel')).toBeInTheDocument()
  })

  it('renders news excerpts', () => {
    render(<LatestNews />)
    expect(screen.getByText(/lesser-known destinations/)).toBeInTheDocument()
    expect(screen.getByText(/minimalist packing/)).toBeInTheDocument()
    expect(screen.getByText(/first solo journey/)).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<LatestNews />)
    const days = screen.getAllByText('12')
    expect(days.length).toBeGreaterThanOrEqual(1)
    const months = screen.getAllByText('Jun')
    expect(months.length).toBe(3)
  })

  it('renders category labels', () => {
    render(<LatestNews />)
    const categories = screen.getAllByText('lifestyle & travel')
    expect(categories.length).toBe(3)
  })

  it('renders promo sidebar', () => {
    render(<LatestNews />)
    expect(screen.getByText('Get a 20% Discount')).toBeInTheDocument()
    expect(screen.getByText('Buy Your Vacation Online Now')).toBeInTheDocument()
  })

  it('renders news images with alt text', () => {
    render(<LatestNews />)
    expect(screen.getByAltText('10 Hidden Gems in Southeast Asia')).toBeInTheDocument()
    expect(screen.getByAltText('How to Pack Light for Any Trip')).toBeInTheDocument()
  })
})
