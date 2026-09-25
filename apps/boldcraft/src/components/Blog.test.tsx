import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Design Systems in 2026')).toBeInTheDocument()
    expect(screen.getByText('Why User Research Should Drive Every Decision')).toBeInTheDocument()
    expect(screen.getByText('Building Brands That Last: A Strategic Approach')).toBeInTheDocument()
  })

  it('renders category pills', () => {
    render(<Blog />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('UX')).toBeInTheDocument()
    expect(screen.getByText('Strategy')).toBeInTheDocument()
  })
})
