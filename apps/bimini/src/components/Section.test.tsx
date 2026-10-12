import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import { HEADER_OFFSET, SECTIONS, shot } from '../lib/site'
import {
  bodyClass,
  eyebrowClass,
  itemBodyClass,
  itemClass,
  itemGridClass,
  itemImageClass,
  itemTitleClass,
  sectionClass,
  sectionHeadingClass,
} from '../lib/styles'

const section = SECTIONS[0]!
const withoutPicture = SECTIONS[1]!

describe('Section — one materialised destination', () => {
  it('anchors the block the sheet’s label points at, clear of the header', () => {
    const { container } = render(<Section section={section} />)

    const block = screen.getByTestId(`section-${section.id}`)

    expect(block.tagName).toBe('SECTION')
    expect(block.id).toBe(section.id)
    expect(block.className).toBe(sectionClass)
    expect(block.getAttribute('aria-labelledby')).toBe(`${section.id}-heading`)
    expect(block.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
    expect(container.firstElementChild).toBe(block)
  })

  it('drops a kicker, its own heading and an opening paragraph', () => {
    render(<Section section={section} />)

    const heading = screen.getByRole('heading', { level: 2, name: section.heading })

    expect(heading.id).toBe(`${section.id}-heading`)
    expect(heading.className).toBe(sectionHeadingClass)
    expect(screen.getByText(section.eyebrow).className).toBe(eyebrowClass)
    expect(screen.getByText(section.body).className).toBe(bodyClass)
  })

  it('lists its cards, with a placeholder picture only where the block has one', () => {
    const { container } = render(<Section section={section} />)

    const list = container.querySelector('ul')

    expect(list?.className).toBe(itemGridClass)
    expect(list?.className).toContain('md:grid-cols-3')

    const items = Array.from(container.querySelectorAll('li'))

    expect(items).toHaveLength(section.items.length)

    for (const [index, item] of section.items.entries()) {
      const rendered = items[index]

      expect(rendered?.className).toBe(itemClass)
      expect(rendered?.querySelector('h3')?.textContent).toBe(item.title)
      expect(rendered?.querySelector('h3')?.className).toBe(itemTitleClass)
      expect(rendered?.querySelector('p')?.textContent).toBe(item.body)
      expect(rendered?.querySelector('p')?.className).toBe(itemBodyClass)

      const picture = rendered?.querySelector('img')

      if (item.image) {
        expect(picture?.getAttribute('src')).toBe(item.image)
        expect(picture?.className).toBe(itemImageClass)
      } else {
        expect(picture).toBeNull()
      }
    }

    expect(section.items[0]?.image).toBe(shot('cockpit-1', 800, 600))
  })

  it('leaves a card with no picture as a card without one', () => {
    const { container } = render(<Section section={withoutPicture} />)

    expect(screen.getByRole('heading', { level: 2, name: withoutPicture.heading })).toBeInTheDocument()
    expect(container.querySelectorAll('img').length).toBe(
      withoutPicture.items.filter((item) => item.image).length,
    )
    expect(withoutPicture.items.some((item) => item.image === undefined)).toBe(true)
  })
})
