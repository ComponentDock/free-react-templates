import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'
describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Blog' })).toBeInTheDocument()
  })
  it('renders all 3 posts', () => {
    render(<Blog />)
    expect(screen.getByText(/How to find/)).toBeInTheDocument()
    expect(screen.getByText(/Tips for first-time/)).toBeInTheDocument()
    expect(screen.getByText(/Understanding property/)).toBeInTheDocument()
  })
})
