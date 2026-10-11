import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagesShowcase } from './ImagesShowcase'

describe('ImagesShowcase', () => {
  it('renders the four image shape variants from seeded placeholders', () => {
    const { container } = render(<ImagesShowcase />)

    expect(container.querySelector('section')!.id).toBe('images')

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    expect(images[0]).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/buildkit-img-rounded/400/260',
    )
    expect(images[0]!.className).toContain('rounded-lg')
    expect(images[1]!.className).toContain('rounded-full')
    expect(images[2]!.className).toContain('shadow-material')
    expect(images[3]!.className).toContain('rounded-full')

    for (const group of ['Rounded Image', 'Circle Image', 'Rounded Raised', 'Circle Raised']) {
      expect(screen.getByRole('heading', { name: group })).toBeInTheDocument()
    }
  })
})
