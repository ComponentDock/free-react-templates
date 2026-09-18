import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('How to cook beef steak with sauce')).toBeInTheDocument()
    expect(screen.getByText('The secret to perfect pasta')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('April 22, 2024')).toBeInTheDocument()
    expect(screen.getByText('April 18, 2024')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(2)
  })
})
