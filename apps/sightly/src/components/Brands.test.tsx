import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the heading', () => {
    render(<Brands />)
    expect(screen.getByText(/Trusted by over 3,000 world's leading companies/i)).toBeInTheDocument()
  })

  it('renders 6 brand logo images', () => {
    render(<Brands />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
  })

  it('uses picsum.photos for brand images', () => {
    render(<Brands />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})
