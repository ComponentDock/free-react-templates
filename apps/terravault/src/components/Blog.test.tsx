import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('From Our Blog')).toBeInTheDocument()
    expect(screen.getByText('News Latest')).toBeInTheDocument()
  })

  it('renders all three blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('How To Choose The Right Property For Your Family')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Market Trends In 2024')).toBeInTheDocument()
    expect(screen.getByText('Tips For First-Time Home Buyers')).toBeInTheDocument()
  })

  it('renders dates', () => {
    render(<Blog />)
    expect(screen.getByText('15 Sep, 2024')).toBeInTheDocument()
    expect(screen.getByText('12 Sep, 2024')).toBeInTheDocument()
    expect(screen.getByText('08 Sep, 2024')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<Blog />)
    expect(screen.getByText(/Finding the perfect home/)).toBeInTheDocument()
    expect(screen.getByText(/Discover the latest trends/)).toBeInTheDocument()
    expect(screen.getByText(/Essential advice/)).toBeInTheDocument()
  })
})
