import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section subtitle and heading', () => {
    render(<Blog />)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Our Blog Posts')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Leading Digital Marketing Strategies')).toBeInTheDocument()
    expect(screen.getByText('Business Growth & Innovation')).toBeInTheDocument()
    expect(screen.getByText('Financial Planning Essentials')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Jan 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Feb 20, 2026')).toBeInTheDocument()
    expect(screen.getByText('Mar 10, 2026')).toBeInTheDocument()
  })

  it('renders post images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Leading Digital Marketing Strategies')).toBeInTheDocument()
    expect(screen.getByAltText('Business Growth & Innovation')).toBeInTheDocument()
    expect(screen.getByAltText('Financial Planning Essentials')).toBeInTheDocument()
  })

  it('renders post descriptions', () => {
    render(<Blog />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })
})
