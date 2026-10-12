import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import { HEADER_OFFSET, SECTIONS } from '../lib/site'
import { itemClass, sectionClass } from '../lib/styles'

const withPictures = SECTIONS[0]!
const withoutPictures = {
  id: 'plain-block',
  eyebrow: 'Plain',
  heading: 'A block with no pictures at all',
  body: 'Every card here is text and nothing else.',
  items: [{ title: 'Only words', body: 'No picture is drawn for this card.' }],
}

describe('Section — one materialised destination', () => {
  it('is a landmark that names itself after its own heading', () => {
    render(<Section section={withPictures} />)

    const section = screen.getByTestId(`section-${withPictures.id}`)
    const heading = screen.getByRole('heading', { level: 2 })

    expect(section.tagName).toBe('SECTION')
    expect(section).toHaveAttribute('id', withPictures.id)
    expect(heading.textContent).toBe(withPictures.heading)
    expect(heading).toHaveAttribute('id', `${withPictures.id}-heading`)
    expect(section).toHaveAttribute('aria-labelledby', `${withPictures.id}-heading`)
    expect(section.className).toBe(sectionClass)
    expect(section.className).toContain('scroll-mt-[122px]')
  })

  it('keeps its own height of scroll margin, so a row lands clear of the bar', () => {
    render(<Section section={withPictures} />)

    expect(screen.getByTestId(`section-${withPictures.id}`)).toHaveStyle({
      scrollMarginTop: `${HEADER_OFFSET}px`,
    })
  })

  it('prints its kicker, its heading, its paragraph and every card in order', () => {
    render(<Section section={withPictures} />)

    expect(screen.getByText(withPictures.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(withPictures.body)).toBeInTheDocument()

    const cards = screen.getAllByRole('listitem')

    expect(cards).toHaveLength(withPictures.items.length)
    expect(cards.map((card) => card.querySelector('h3')?.textContent)).toEqual(
      withPictures.items.map((item) => item.title),
    )
    expect(cards.map((card) => card.querySelector('p')?.textContent)).toEqual(
      withPictures.items.map((item) => item.body),
    )

    for (const card of cards) {
      expect(card.className).toBe(itemClass)
      expect(card.className).toContain('scroll-mt-[122px]')
    }
  })

  it('gives a card its own anchor only where something points at it', () => {
    render(<Section section={SECTIONS[1]!} />)

    const anchored = screen
      .getAllByRole('listitem')
      .filter((card) => card.hasAttribute('id'))
      .map((card) => card.getAttribute('id'))

    expect(anchored).toEqual(SECTIONS[1]!.items.map((item) => item.id).filter(Boolean))
  })

  it('draws a placeholder picture for the cards that declare one, and none for the rest', () => {
    const { container } = render(<Section section={withPictures} />)

    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures).toHaveLength(withPictures.items.filter((item) => item.image).length)

    for (const picture of pictures) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/binnacle-')
      expect(picture).toHaveAttribute('alt', '')
    }
  })

  it('draws nothing but text for a block that declares no pictures', () => {
    const { container } = render(<Section section={withoutPictures} />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(screen.getByText(withoutPictures.items[0]!.title)).toBeInTheDocument()
  })
})
