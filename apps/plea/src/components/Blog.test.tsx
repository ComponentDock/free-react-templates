import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Blog')
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Understanding Anxiety')).toBeInTheDocument()
    expect(screen.getByText('Family Communication')).toBeInTheDocument()
    expect(screen.getByText('When to Seek Counseling')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('March 15, 2024')).toBeInTheDocument()
    expect(screen.getByText('March 10, 2024')).toBeInTheDocument()
    expect(screen.getByText('March 5, 2024')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/different types of anxiety/)).toBeInTheDocument()
    expect(screen.getByText(/improving communication/)).toBeInTheDocument()
    expect(screen.getByText(/signs that professional/)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More →')
    expect(links).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Understanding Anxiety')).toBeInTheDocument()
    expect(screen.getByAltText('Family Communication')).toBeInTheDocument()
    expect(screen.getByAltText('When to Seek Counseling')).toBeInTheDocument()
  })
})
