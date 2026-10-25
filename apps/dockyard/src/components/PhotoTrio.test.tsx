import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PhotoTrio } from './PhotoTrio'
import { photoTrio } from '../data'

describe('PhotoTrio', () => {
  it('renders three photo cards with uppercase titles and grey blurbs', () => {
    render(<PhotoTrio />)

    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(3)

    for (const [index, card] of photoTrio.entries()) {
      expect(screen.getByRole('img', { name: card.title })).toHaveAttribute('src', card.src)
      const title = screen.getByRole('heading', { level: 3, name: card.title })
      expect(title).toHaveClass('uppercase', 'text-[22.4px]')
      expect(cards[index]).toHaveTextContent(card.blurb)
    }
  })

  it('lifts the photograph on hover and on keyboard focus', () => {
    render(<PhotoTrio />)

    const image = screen.getByRole('img', { name: photoTrio[0]!.title })
    expect(image).toHaveClass('group-hover:-translate-y-[5px]', 'group-focus-within:-translate-y-[5px]')
    expect(image.className).toContain('duration-300')
  })

  it('sits in a three-column grid on desktop', () => {
    render(<PhotoTrio />)

    expect(screen.getAllByRole('list')[0]).toHaveClass('md:grid-cols-3')
  })
})
