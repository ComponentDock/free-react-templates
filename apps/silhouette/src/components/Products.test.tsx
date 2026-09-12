import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from './Products'

describe('Products', () => {
  it('renders 8 product cards', () => {
    render(<Products />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(8)
  })

  it('displays product names and prices', () => {
    render(<Products />)
    expect(screen.getByText('Linen Blazer')).toBeInTheDocument()
    expect(screen.getByText('$129')).toBeInTheDocument()
    expect(screen.getByText('Tailored Coat')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
  })

  it('renders product images with alt text', () => {
    render(<Products />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
    expect(images[0]).toHaveAttribute('alt', 'Linen Blazer')
  })
})
