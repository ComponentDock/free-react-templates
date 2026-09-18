import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PromoBanners } from './PromoBanners'

describe('PromoBanners', () => {
  it('renders two promotional banner images', () => {
    render(<PromoBanners />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(2)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })

  it('displays Best Summer Collection heading', () => {
    render(<PromoBanners />)
    const headings = screen.getAllByText('Best Summer Collection')
    expect(headings.length).toBe(2)
  })

  it('renders Shop Now links', () => {
    render(<PromoBanners />)
    const shopLinks = screen.getAllByText('Shop Now')
    expect(shopLinks.length).toBe(2)
  })
})
