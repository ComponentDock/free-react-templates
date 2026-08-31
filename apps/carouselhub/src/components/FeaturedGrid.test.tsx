import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedGrid } from './FeaturedGrid'

describe('FeaturedGrid', () => {
  it('renders the section heading', () => {
    render(<FeaturedGrid />)
    expect(
      screen.getByRole('heading', { level: 2, name: /featured collections/i }),
    ).toBeInTheDocument()
  })

  it('renders 6 grid cards', () => {
    render(<FeaturedGrid />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })

  it('renders each card with title and category', () => {
    render(<FeaturedGrid />)
    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<FeaturedGrid />)
    expect(screen.getByText(/explore our curated portfolio/i)).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    const { container } = render(<FeaturedGrid />)
    const section = container.querySelector('#gallery')
    expect(section).toBeInTheDocument()
  })

  it('renders images with correct src', () => {
    render(<FeaturedGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
    expect(images[0]!.getAttribute('src')).toContain('carouselhub-4')
  })
})
