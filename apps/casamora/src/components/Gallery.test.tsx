import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading', () => {
    render(<Gallery />)
    expect(screen.getByText('See The Gallery')).toBeInTheDocument()
  })

  it('renders 7 gallery images', () => {
    render(<Gallery />)
    for (let i = 1; i <= 7; i++) {
      expect(screen.getByAltText(`Gallery photo ${i}`)).toBeInTheDocument()
    }
  })

  it('renders View More Photos link', () => {
    render(<Gallery />)
    expect(screen.getByText('View More Photos')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Gallery className="custom-class" />)
    expect(screen.getByText('See The Gallery').closest('section')).toHaveClass('custom-class')
  })
})
