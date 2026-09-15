import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section title', () => {
    render(<Blog />)
    expect(screen.getByText('Our Latest Blog')).toBeInTheDocument()
  })

  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Our Latest Project')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Building Practices')).toBeInTheDocument()
    expect(screen.getByText('Renovation Tips for Homeowners')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Michael Ross')).toBeInTheDocument()
    expect(screen.getByText(/October 15, 2024/)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks.length).toBe(3)
  })
})
