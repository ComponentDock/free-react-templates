import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestBlog } from './LatestBlog'

describe('LatestBlog', () => {
  it('renders section heading', () => {
    render(<LatestBlog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest Blog Post')
  })

  it('renders all 4 blog posts', () => {
    render(<LatestBlog />)
    expect(screen.getByText(/How to Keep Your Home Pest-Free/)).toBeInTheDocument()
    expect(screen.getByText(/Understanding Cockroach Behavior/)).toBeInTheDocument()
    expect(screen.getByText(/Eco-Friendly Pest Control Methods/)).toBeInTheDocument()
    expect(screen.getByText(/Signs You Need Professional Pest Control/)).toBeInTheDocument()
  })

  it('renders dates and categories', () => {
    render(<LatestBlog />)
    expect(screen.getByText('13 January 2020')).toBeInTheDocument()
    expect(screen.getByText('10 January 2020')).toBeInTheDocument()
    expect(screen.getByText(/Tips/)).toBeInTheDocument()
    expect(screen.getAllByText(/Control/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders images', () => {
    render(<LatestBlog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })
})
