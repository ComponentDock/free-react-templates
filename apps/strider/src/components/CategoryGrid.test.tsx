import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryGrid } from './CategoryGrid'

describe('CategoryGrid', () => {
  it('renders all five category cards', () => {
    render(<CategoryGrid />)
    expect(screen.getByText("Men's Collection")).toBeInTheDocument()
    expect(screen.getByText("Women's Collection")).toBeInTheDocument()
    expect(screen.getByText('Sports Wear')).toBeInTheDocument()
    expect(screen.getByText('Casual Wear')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
  })

  it('renders category images', () => {
    render(<CategoryGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(5)
  })
})
