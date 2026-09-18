import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three category cards', () => {
    render(<Features />)
    expect(screen.getByText('Shop for Men')).toBeInTheDocument()
    expect(screen.getByText('Shop for Women')).toBeInTheDocument()
    expect(screen.getByText('Shop for Shoes')).toBeInTheDocument()
  })

  it('renders images for each category', () => {
    render(<Features />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
