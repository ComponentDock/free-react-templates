import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'
import { NEWS, NEWS_BLURB, NEWS_HEADING } from '../data'

describe('News', () => {
  it('renders the section on the light background with heading and intro', () => {
    const { container } = render(<News />)

    const section = container.querySelector('section') as HTMLElement
    expect(section.className).toMatch(/bg-soft/)
    expect(screen.getByRole('heading', { name: NEWS_HEADING })).toBeInTheDocument()
    expect(screen.getByText(NEWS_BLURB)).toBeInTheDocument()
  })

  it('renders three news cards with image, date and headline link', () => {
    const { container } = render(<News />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(3)

    for (const card of NEWS) {
      for (const date of screen.getAllByText(card.date)) {
        expect(date.className).toMatch(/uppercase/)
      }
      const headline = screen.getByRole('link', { name: card.title })
      expect(headline.className).toMatch(/text-black/)
      const cardElement = headline.closest('div')
      expect(cardElement?.className).toMatch(/bg-white/)
    }
  })
})
