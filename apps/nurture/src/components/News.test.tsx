import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section heading', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('School News')
  })

  it('renders all 3 news cards', () => {
    render(<News />)
    expect(screen.getByText('Spring Enrollment Now Open')).toBeInTheDocument()
    expect(screen.getByText('New Music Program Launch')).toBeInTheDocument()
    expect(screen.getByText('Summer Camp Registration')).toBeInTheDocument()
  })

  it('renders Read More links for each post', () => {
    render(<News />)
    const readMoreLinks = screen.getAllByText('Read More →')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders dates for each post', () => {
    render(<News />)
    expect(screen.getByText('March 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('March 5, 2026')).toBeInTheDocument()
  })
})
