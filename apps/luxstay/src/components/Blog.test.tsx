import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Hidden Gems in the City')).toBeInTheDocument()
    expect(screen.getByText('A Guide to Fine Dining Experiences')).toBeInTheDocument()
    expect(screen.getByText('Wellness Retreats: A Complete Guide')).toBeInTheDocument()
  })

  it('has a play button for video', () => {
    render(<Blog />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('has a View all blog post link', () => {
    render(<Blog />)
    expect(screen.getByText('View all blog post →')).toBeInTheDocument()
  })
})
