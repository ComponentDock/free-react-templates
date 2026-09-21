import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<Blog />)
    expect(
      screen.getByText('A Basic Guide to Starting a Franchise in the Philippines'),
    ).toBeInTheDocument()
    expect(screen.getByText('Smart Investment Strategies for Small Businesses')).toBeInTheDocument()
    expect(screen.getByText('Understanding Modern Banking Solutions')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('May 1, 2026')).toBeInTheDocument()
    expect(screen.getByText('Apr 22, 2026')).toBeInTheDocument()
    expect(screen.getByText('Apr 15, 2026')).toBeInTheDocument()
  })
})
