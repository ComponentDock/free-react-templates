import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { LatestArticles } from './LatestArticles'

describe('LatestArticles', () => {
  it('renders the heading and article cards', () => {
    render(<LatestArticles />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Articles')
    expect(screen.getByText(/The Future of Remote Work/)).toBeInTheDocument()
    expect(screen.getByText(/Sustainable Wardrobe/)).toBeInTheDocument()
    expect(screen.getByText(/Cybersecurity Tips/)).toBeInTheDocument()
    expect(screen.getByText(/Weekend Getaways/)).toBeInTheDocument()
    expect(screen.getByText(/Restaurant Openings/)).toBeInTheDocument()
    expect(screen.getByText(/Smartphone Camera/)).toBeInTheDocument()
  })

  it('renders author and date for articles', () => {
    render(<LatestArticles />)
    expect(screen.getByText('Emma Watson')).toBeInTheDocument()
    expect(screen.getByText('Sep 12, 2026')).toBeInTheDocument()
  })
})
