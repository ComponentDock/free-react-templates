import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders the centered header with the reference heading', () => {
    render(<Packages />)

    expect(document.getElementById('package')).not.toBeNull()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Popular Packages')
    expect(heading.parentElement?.className).toContain('text-center')
  })

  it('renders six photo cards with the gradient hover overlay and white titles', () => {
    const { container } = render(<Packages />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6)
    images.forEach((image, index) => {
      expect(image.getAttribute('src')).toContain(`picsum.photos/seed/wanderport-pkg-${index + 1}`)
      expect(image).toHaveAttribute('loading', 'lazy')
    })

    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(6)
    for (const title of titles) {
      expect(title).toHaveTextContent('Resort Holiday package')
      expect(title.className).toContain('text-white')
    }

    const overlays = document.querySelectorAll('.brand-gradient.absolute.inset-0')
    expect(overlays).toHaveLength(6)
  })
})
