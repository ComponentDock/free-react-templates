import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CollectionsCarousel } from './CollectionsCarousel'

describe('CollectionsCarousel', () => {
  it('renders heading', () => {
    render(<CollectionsCarousel />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Collections')
  })

  it('renders product cards', () => {
    render(<CollectionsCarousel />)
    expect(screen.getByText('The Shoe')).toBeInTheDocument()
    expect(screen.getByText('Marc Jacobs Bag')).toBeInTheDocument()
    expect(screen.getByText('The Belt')).toBeInTheDocument()
    expect(screen.getByText('Summer Dress')).toBeInTheDocument()
    expect(screen.getByText('Linen Jacket')).toBeInTheDocument()
    expect(screen.getByText('Canvas Tote')).toBeInTheDocument()
  })

  it('renders 6 product cards total', () => {
    render(<CollectionsCarousel />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(6)
  })
})
