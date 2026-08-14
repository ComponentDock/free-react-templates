import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PhotoGrid } from './PhotoGrid'
import { PHOTOS } from '../data'

describe('PhotoGrid', () => {
  it('renders 19 photo cards with picsum-seeded cover images', () => {
    const { container } = render(<PhotoGrid />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(PHOTOS.length)
    images.forEach((img, index) => {
      const photo = PHOTOS[index]!
      expect(img).toHaveAttribute('src', photo.src)
      expect(img).toHaveAttribute('alt', `Photo ${photo.id}`)
    })

    const cards = container.querySelectorAll('a.group')
    expect(cards).toHaveLength(19)
  })

  it('applies the exact column-span sequence on desktop', () => {
    const { container } = render(<PhotoGrid />)

    const spans = Array.from(container.querySelectorAll('a.group')).map((card) =>
      Array.from(card.classList)
        .filter((name) => name.startsWith('lg:col-span-'))
        .join(''),
    )
    expect(spans).toEqual(PHOTOS.map((photo) => `lg:col-span-${photo.span}`))
    expect(spans[0]).toBe('lg:col-span-8')
    expect(spans[1]).toBe('lg:col-span-4')
  })

  it('renders the hover overlay (heading + meta) on every card', () => {
    const { container } = render(<PhotoGrid />)

    const headings = screen.getAllByRole('heading', { level: 3, hidden: true })
    expect(headings).toHaveLength(19)
    for (const heading of headings) {
      expect(heading).toHaveTextContent('Photos Title Here')
    }

    const metas = container.querySelectorAll('span.text-meta')
    expect(metas).toHaveLength(19)
    for (const meta of metas) {
      expect(meta).toHaveTextContent('42 Photos')
    }

    // Hover veil + overlay are opacity-0 and revealed via group-hover.
    const veils = container.querySelectorAll('div.bg-black\\/60')
    expect(veils).toHaveLength(19)
    for (const veil of veils) {
      expect(veil).toHaveClass('opacity-0', 'group-hover:opacity-100')
    }
  })
})
