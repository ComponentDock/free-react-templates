import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders all blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Top Tips for Road Trips' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Best Cars for Families' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'City Driving Guide' })).toBeInTheDocument()
  })

  it('renders dates and descriptions', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText(/Essential tips/)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
