import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent Post' })).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Tips on how to hire/)).toBeInTheDocument()
    expect(screen.getByText(/Why professional cleaning/)).toBeInTheDocument()
    expect(screen.getByText(/Eco-friendly cleaning/)).toBeInTheDocument()
  })
})
