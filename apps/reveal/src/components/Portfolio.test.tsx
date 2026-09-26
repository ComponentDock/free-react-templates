import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Portfolio')
  })

  it('renders 9 portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(9)
  })

  it('displays project titles', () => {
    render(<Portfolio />)
    expect(screen.getAllByText('Shoe Rebranding').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Modern Building').length).toBe(2)
  })
})
