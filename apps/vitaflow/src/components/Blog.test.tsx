import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest news from our blog')).toBeInTheDocument()
    expect(screen.getByText('News & Blog')).toBeInTheDocument()
  })

  it('renders 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText(/Top 10 Benefits/)).toBeInTheDocument()
    expect(screen.getByText(/Healthy Eating Habits/)).toBeInTheDocument()
    expect(screen.getByText(/Stay Motivated/)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })

  it('renders dates and authors', () => {
    render(<Blog />)
    expect(screen.getByText('January 30, 2025')).toBeInTheDocument()
    expect(screen.getByText('January 28, 2025')).toBeInTheDocument()
    expect(screen.getByText('January 25, 2025')).toBeInTheDocument()
  })
})
