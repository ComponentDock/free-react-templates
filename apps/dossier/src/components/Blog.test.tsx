import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Blog on Medium')
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Product Design in 2026')).toBeInTheDocument()
    expect(screen.getByText('Building Accessible Design Systems')).toBeInTheDocument()
    expect(screen.getByText('From Mockup to Production')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/emerging trends in product design/)).toBeInTheDocument()
  })
})
