import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Journal')
  })

  it('renders 5 blog posts', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(5)
  })

  it('renders post titles', () => {
    render(<Blog />)
    expect(screen.getByText('A Mountaineering Guide For Beginners')).toBeInTheDocument()
    expect(screen.getByText('Exploring the Swiss Alps')).toBeInTheDocument()
  })

  it('renders author and read time', () => {
    render(<Blog />)
    expect(screen.getAllByText(/By Joefrey/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/5 mins read/).length).toBeGreaterThanOrEqual(1)
  })
})
