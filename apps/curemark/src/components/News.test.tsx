import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { News } from './News'

describe('News', () => {
  it('renders the section heading', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2, name: /the news/i })).toBeInTheDocument()
  })

  it('renders 3 blog post cards', () => {
    render(<News />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('displays post titles', () => {
    render(<News />)
    expect(screen.getByText('Advances in Cardiac Surgery Techniques')).toBeInTheDocument()
    expect(screen.getByText('The Importance of Regular Health Check-ups')).toBeInTheDocument()
    expect(screen.getByText('Breakthrough in Neurological Research')).toBeInTheDocument()
  })

  it('displays meta information (date, author, comments)', () => {
    render(<News />)
    expect(screen.getByText('September 20, 2026')).toBeInTheDocument()
    expect(screen.getByText('Dr. Smith')).toBeInTheDocument()
    expect(screen.getByText('5 comments')).toBeInTheDocument()
  })

  it('displays excerpt text', () => {
    render(<News />)
    expect(screen.getByText(/minimally invasive techniques/i)).toBeInTheDocument()
  })

  it('renders images with alt text', () => {
    render(<News />)
    expect(screen.getByAltText('Advances in Cardiac Surgery Techniques')).toBeInTheDocument()
  })

  it('has proper aria-label', () => {
    render(<News />)
    expect(screen.getByRole('region', { name: /latest news/i })).toBeInTheDocument()
  })
})
