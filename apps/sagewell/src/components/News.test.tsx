import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { News } from './News'

describe('News', () => {
  it('renders the section title', () => {
    render(<News />)
    expect(screen.getByText('Recent News')).toBeInTheDocument()
  })

  it('renders two blog post cards', () => {
    render(<News />)
    expect(screen.getByText(/Those Other College Expenses/)).toBeInTheDocument()
    expect(screen.getByText(/How to Balance Academics/)).toBeInTheDocument()
  })

  it('displays badges', () => {
    render(<News />)
    expect(screen.getByText('Group Study')).toBeInTheDocument()
    expect(screen.getByText('Hall Life')).toBeInTheDocument()
  })

  it('displays dates and comment counts', () => {
    render(<News />)
    const dates = screen.getAllByText('May 10, 2024')
    expect(dates.length).toBe(2)
    expect(screen.getByText('1 comment')).toBeInTheDocument()
    expect(screen.getByText('2 comments')).toBeInTheDocument()
  })

  it('renders post images', () => {
    render(<News />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
