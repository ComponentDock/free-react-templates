import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section title', () => {
    render(<Gallery />)
    expect(screen.getByText('My world class photography')).toBeInTheDocument()
  })

  it('renders all 9 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(9)
  })

  it('renders gallery photo titles on hover area', () => {
    render(<Gallery />)
    expect(screen.getAllByText('Baby album').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Portrait album').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Nature album').length).toBeGreaterThanOrEqual(1)
  })

  it('has the albums section id', () => {
    render(<Gallery />)
    expect(document.getElementById('albums')).not.toBeNull()
  })
})
