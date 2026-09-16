import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /our latest story/i })).toBeInTheDocument()
  })

  it('renders three story cards', () => {
    render(<Blog />)
    expect(screen.getByText(/Building schools in rural communities/)).toBeInTheDocument()
    expect(screen.getByText(/Clean water initiative reaches/)).toBeInTheDocument()
    expect(screen.getByText(/Volunteer conference highlights/)).toBeInTheDocument()
  })

  it('displays dates and categories', () => {
    render(<Blog />)
    expect(screen.getByText('20th Sep, 2024')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Healthcare')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('renders images with lazy loading', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })
})
