import { render, screen, within } from '@testing-library/react'
import { Section } from './Section'
import { HEADER_OFFSET, SECTIONS } from '../lib/site'
import {
  eyebrowClass,
  itemClass,
  itemGridClass,
  itemImageClass,
  itemTitleClass,
  sectionClass,
  sectionHeadingClass,
} from '../lib/styles'

const section = SECTIONS[0]!

describe('Section — one materialised destination', () => {
  it('carries the anchor its own label points at, and names itself with its own heading', () => {
    render(<Section section={section} />)

    const block = screen.getByTestId(`section-${section.id}`)
    const heading = screen.getByRole('heading', { level: 2, name: section.heading })

    expect(block.id).toBe(section.id)
    expect(block).toHaveAttribute('aria-labelledby', heading.id)
    expect(heading.id).toBe(`${section.id}-heading`)
  })

  it('keeps itself clear of the burger when it is rolled to', () => {
    render(<Section section={section} />)

    const block = screen.getByTestId(`section-${section.id}`)

    expect(block.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
    expect(block.className).toBe(sectionClass)
    expect(block.className).toContain('scroll-mt-[300px]')
    expect(block.className).toContain('border-b')
    expect(block.className).toContain('last:border-b-0')
  })

  it('opens on a kicker, its heading and a paragraph kept to a readable measure', () => {
    render(<Section section={section} />)

    expect(screen.getByText(section.eyebrow).className).toBe(eyebrowClass)
    expect(screen.getByRole('heading', { level: 2 }).className).toBe(sectionHeadingClass)
    expect(screen.getByText(section.body).tagName).toBe('P')
  })

  it('lists every card the block declares, each with its own anchor and title', () => {
    render(<Section section={section} />)

    const grid = screen.getByRole('list')

    expect(grid.className).toBe(itemGridClass)
    expect(within(grid).getAllByRole('listitem')).toHaveLength(section.items.length)

    for (const item of section.items) {
      const card = screen.getByRole('heading', { level: 3, name: item.title }).parentElement!

      expect(screen.getByRole('heading', { level: 3, name: item.title }).className).toBe(
        itemTitleClass,
      )
      expect(card.className).toBe(itemClass)
      expect(within(card).getByText(item.body)).toBeInTheDocument()
    }
  })

  it('gives a picture only to the cards that declare one, off the app’s own placeholder set', () => {
    const { container } = render(<Section section={section} />)

    const withPicture = section.items.filter((item) => item.image !== undefined)
    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures).toHaveLength(withPicture.length)
    expect(withPicture.length).toBeGreaterThan(0)
    expect(withPicture.length).toBeLessThan(section.items.length)

    for (const item of withPicture) {
      const card = screen.getByRole('heading', { level: 3, name: item.title }).parentElement!
      const picture = card.querySelector('img')!

      expect(picture.getAttribute('src')).toBe(item.image)
      expect(picture.className).toBe(itemImageClass)
      expect(picture.getAttribute('alt')).toBe('')
    }
  })
})
