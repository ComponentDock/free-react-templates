import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('My Photography')).toBeInTheDocument()
  })

  it('renders all six gallery items', () => {
    render(<Gallery />)
    expect(screen.getByText('Autumn Leaf')).toBeInTheDocument()
    expect(screen.getByText('Sea Creatures')).toBeInTheDocument()
    expect(screen.getByText('Enjoying Deep Sea')).toBeInTheDocument()
    expect(screen.getByText('Beautiful Beach')).toBeInTheDocument()
    expect(screen.getByText('Laughter is Science')).toBeInTheDocument()
    expect(screen.getByText('Golden Hour')).toBeInTheDocument()
  })

  it('renders photo count for each item', () => {
    render(<Gallery />)
    const counts = screen.getAllByText(/5 photos \/ Nature/)
    expect(counts.length).toBe(6)
  })

  it('renders images with alt text', () => {
    render(<Gallery />)
    expect(screen.getByAltText('Autumn Leaf')).toBeInTheDocument()
    expect(screen.getByAltText('Golden Hour')).toBeInTheDocument()
  })
})
