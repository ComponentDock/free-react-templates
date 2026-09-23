import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders 7 portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(7)
  })

  it('shows title and category for each item on hover', () => {
    render(<Portfolio />)
    expect(screen.getByText('Summer in the desert')).toBeInTheDocument()
    expect(screen.getByText('Landscape Photography')).toBeInTheDocument()
    expect(screen.getByText('Urban nightscape')).toBeInTheDocument()
    expect(screen.getByText('Street Photography')).toBeInTheDocument()
  })

  it('has the portfolio section id', () => {
    render(<Portfolio />)
    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'portfolio')
  })

  it('each image has a unique seed-based src', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    const srcs = images.map((img) => img.getAttribute('src'))
    const uniqueSrcs = new Set(srcs)
    expect(uniqueSrcs.size).toBe(7)
  })
})
