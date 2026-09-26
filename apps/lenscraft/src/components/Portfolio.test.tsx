import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Check Our Work')).toBeInTheDocument()
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
  })

  it('renders portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByText('2D Vinyl Design')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Photo Editing')).toBeInTheDocument()
    expect(screen.getByText('Magazine Layout')).toBeInTheDocument()
    expect(screen.getByText('Album Cover')).toBeInTheDocument()
  })

  it('renders the View More button', () => {
    render(<Portfolio />)
    expect(screen.getByRole('link', { name: /view more/i })).toBeInTheDocument()
  })

  it('renders portfolio images with correct seeds', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    const portfolioImages = images.filter((img) => img.getAttribute('src')?.includes('lenscraft-w'))
    expect(portfolioImages.length).toBe(5)
  })
})
