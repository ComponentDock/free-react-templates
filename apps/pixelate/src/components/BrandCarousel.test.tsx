import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandCarousel } from './BrandCarousel'

describe('BrandCarousel', () => {
  it('renders all six brand logos', () => {
    render(<BrandCarousel />)
    expect(screen.getByText('Brand 1')).toBeInTheDocument()
    expect(screen.getByText('Brand 2')).toBeInTheDocument()
    expect(screen.getByText('Brand 3')).toBeInTheDocument()
    expect(screen.getByText('Brand 4')).toBeInTheDocument()
    expect(screen.getByText('Brand 5')).toBeInTheDocument()
    expect(screen.getByText('Brand 6')).toBeInTheDocument()
  })
})
