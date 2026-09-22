import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Discover the Best Hidden Beaches')).toBeInTheDocument()
    expect(screen.getByText("A Foodie's Guide to Coastal Cuisine")).toBeInTheDocument()
    expect(screen.getByText('Planning Your Perfect Beach Vacation')).toBeInTheDocument()
  })
})
