import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagesShowcase } from './ImagesShowcase'

describe('ImagesShowcase', () => {
  it('renders the three treatments over one shared portrait', () => {
    const { container } = render(<ImagesShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Images' })).toBeInTheDocument()
    expect(screen.getByText('Rounded Image')).toBeInTheDocument()
    expect(screen.getByText('Circle Image')).toBeInTheDocument()
    expect(screen.getByText('Circle Raised')).toBeInTheDocument()
    expect(screen.getAllByText('Clyde Ford')).toHaveLength(3)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos/seed/sorbet-person')
      expect(image).toHaveAttribute('loading', 'lazy')
    }

    expect(images[0]!).toHaveClass('rounded')
    expect(images[1]!).toHaveClass('rounded-full')
    expect(images[2]!.className).toContain('shadow-card')
    expect(container.querySelectorAll('figcaption')).toHaveLength(3)
  })
})
