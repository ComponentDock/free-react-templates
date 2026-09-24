import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductListArea } from './ProductListArea'

describe('ProductListArea', () => {
  it('renders all 3 column headings', () => {
    render(<ProductListArea />)
    expect(screen.getByText('Best Product Deals')).toBeInTheDocument()
    expect(screen.getByText('Tech Culture')).toBeInTheDocument()
    expect(screen.getByText('Brilliant Ideas')).toBeInTheDocument()
  })

  it('renders 4 items per column (12 total)', () => {
    render(<ProductListArea />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(12)
  })

  it('renders article headlines', () => {
    render(<ProductListArea />)
    expect(screen.getByText(/Video Games Playing/)).toBeInTheDocument()
    expect(screen.getByText(/Will The Democrats/)).toBeInTheDocument()
    expect(screen.getByText(/Las Vegas How To/)).toBeInTheDocument()
  })
})
