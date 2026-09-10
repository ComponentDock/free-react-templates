import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our blog')).toBeInTheDocument()
    expect(screen.getByText('Latest Story From Our Blog')).toBeInTheDocument()
  })

  it('renders all 3 blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('The Art of Visual Storytelling')).toBeInTheDocument()
    expect(screen.getByText('Design Trends to Watch in 2024')).toBeInTheDocument()
    expect(screen.getByText('Building a Creative Portfolio')).toBeInTheDocument()
  })

  it('renders blog excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/visual narratives/)).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Learn More')
    expect(links).toHaveLength(3)
  })

  it('renders author and date meta', () => {
    render(<Blog />)
    expect(screen.getByText('Mar 15, 2024')).toBeInTheDocument()
    expect(screen.getAllByText('Jo Breed').length).toBeGreaterThan(0)
  })
})
