import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest from the Blog')
  })

  it('renders 2 blog posts', () => {
    render(<Blog />)
    const readMoreButtons = screen.getAllByText(/read more/i)
    expect(readMoreButtons).toHaveLength(2)
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/How to take the perfect shot/i)).toBeInTheDocument()
    expect(screen.getByText(/10 tips for a new photographer/i)).toBeInTheDocument()
  })

  it('renders blog categories', () => {
    render(<Blog />)
    const categories = screen.getAllByText(/photography/i)
    expect(categories.length).toBeGreaterThanOrEqual(2)
  })

  it('renders blog dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText(/January 23, 2019/)
    expect(dates.length).toBeGreaterThanOrEqual(1)
  })
})
