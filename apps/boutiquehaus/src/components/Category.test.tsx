import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Category } from './Category'

describe('Category', () => {
  it('renders heading and category cards', () => {
    render(<Category />)
    expect(
      screen.getByRole('heading', { name: /Shop for Different Categories/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Product for Women/i)).toBeInTheDocument()
    expect(screen.getByText(/Product for Couple/i)).toBeInTheDocument()
    expect(screen.getByText(/Product For Men/i)).toBeInTheDocument()
    expect(screen.getByText(/Shop Now/i)).toBeInTheDocument()
  })

  it('renders category images with picsum URLs', () => {
    render(<Category />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
