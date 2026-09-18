import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders 10 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(10)
  })

  it('has data-testid', () => {
    render(<Gallery />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('renders gallery links', () => {
    render(<Gallery />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(10)
  })
})
