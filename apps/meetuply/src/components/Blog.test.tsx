import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders all blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Announcing the 2025 Conference Schedule')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Keynote Speakers')).toBeInTheDocument()
    expect(screen.getByText('Early Bird Tickets Now Available')).toBeInTheDocument()
  })

  it('renders date badges', () => {
    render(<Blog />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
  })

  it('renders blog images with alt text', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
