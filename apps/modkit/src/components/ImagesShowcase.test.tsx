import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagesShowcase } from './ImagesShowcase'

describe('ImagesShowcase', () => {
  it('renders one shared placeholder in the four shape variants', () => {
    const { container } = render(<ImagesShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Images')

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    images.forEach((image) =>
      expect(image.getAttribute('src')).toBe('https://picsum.photos/seed/modkit-img-1/600/400'),
    )

    expect(screen.getByText('Rounded Raised Image')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Rounded Raised Image sample' }).className).toContain(
      'shadow-kit-raised',
    )
    expect(screen.getByRole('img', { name: 'Circle Image sample' }).className).toContain(
      'rounded-full',
    )
    expect(screen.getByRole('img', { name: 'Thumbnail Image sample' }).className).toContain(
      'border-4',
    )
    expect(container.querySelectorAll('img.w-3\\/4')).toHaveLength(4)
  })
})
