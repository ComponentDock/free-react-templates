import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagesShowcase } from './ImagesShowcase'

describe('ImagesShowcase', () => {
  it('renders four treatments of one shared photo', () => {
    render(<ImagesShowcase />)

    const images = screen.getAllByRole('img')

    expect(images).toHaveLength(4)
    expect(images.map((image) => image.getAttribute('alt'))).toEqual([
      'Rounded Raised Image',
      'Rounded Image',
      'Circle Image',
      'Thumbnail Image',
    ])
    expect(new Set(images.map((image) => image.getAttribute('src'))).size).toBe(1)
    expect(images[0]?.getAttribute('src')).toContain('picsum.photos/seed/flairkit-img-1')
  })

  it('applies the raised, circle and thumbnail shapes', () => {
    render(<ImagesShowcase />)

    const [raised, rounded, circle, thumbnail] = screen.getAllByRole('img')

    expect(raised?.className).toContain('shadow-raised')
    expect(rounded?.className).toContain('rounded')
    expect(circle?.className).toContain('rounded-full')
    expect(thumbnail?.className).toContain('border')
    expect(thumbnail?.className).toContain('p-1')
  })
})
