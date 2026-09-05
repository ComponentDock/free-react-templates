import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and quote', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Why We Are The Best/i })).toBeInTheDocument()
    expect(screen.getByText(/Justice delayed/i)).toBeInTheDocument()
  })

  it('renders both images with picsum sources', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
