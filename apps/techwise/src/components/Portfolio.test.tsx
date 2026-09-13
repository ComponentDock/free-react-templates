import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading', () => {
    render(<Portfolio />)
    expect(
      screen.getByRole('heading', { name: /Our Exceptional Quality Work/i }),
    ).toBeInTheDocument()
  })

  it('renders portfolio images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('renders hover overlay links', () => {
    render(<Portfolio />)
    const overlayLinks = screen.getAllByRole('link', { name: /View/i })
    expect(overlayLinks.length).toBeGreaterThanOrEqual(6)
  })
})
