import { render, screen } from '@testing-library/react'
import { HEADER_OFFSET, SECTIONS } from '../lib/site'
import { Section } from './Section'

const WATCH = SECTIONS.find((section) => section.id === 'watch')
const RESERVE = SECTIONS.find((section) => section.id === 'reserve')

if (!WATCH || !RESERVE) {
  throw new Error('the model no longer carries the fixtures this suite uses')
}

describe('Section — one materialised destination', () => {
  it('is a landmark named by its own heading', () => {
    render(<Section section={WATCH} />)

    const region = screen.getByRole('region', { name: WATCH.heading })

    expect(region).toHaveAttribute('id', 'watch')
    expect(region).toHaveAttribute('data-testid', 'section-watch')
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', 'watch-heading')
  })

  it('keeps its heading clear of the bar it arrived from', () => {
    render(<Section section={WATCH} />)

    const region = screen.getByRole('region', { name: WATCH.heading })

    expect(region.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
  })

  it('draws its kicker, heading and paragraph', () => {
    render(<Section section={WATCH} />)

    const region = screen.getByRole('region', { name: WATCH.heading })
    const kicker = region.querySelector('p') as HTMLElement

    expect(kicker.textContent).toBe(WATCH.eyebrow)
    expect(kicker.className).toContain('text-brand')
    expect(region).toHaveTextContent(WATCH.body)
    expect(screen.getByRole('heading', { level: 2 }).className).toContain('text-[28px]')
  })

  it('lists one card per destination it materialises', () => {
    render(<Section section={WATCH} />)

    const cards = screen.getAllByRole('listitem')

    expect(cards).toHaveLength(WATCH.items.length)

    for (const card of cards) {
      expect(card.className).toContain('bg-white')
      expect(card.querySelector('h3')).not.toBeNull()
    }

    expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent(WATCH.items[0]!.title)
  })

  it('gives a picture only to the cards that carry one', () => {
    const { container } = render(<Section section={WATCH} />)

    const pictures = Array.from(container.querySelectorAll('img'))
    const expected = WATCH.items.filter((item) => item.image)

    expect(pictures).toHaveLength(expected.length)
    expect(pictures[0]).toHaveAttribute('alt', '')
    expect(pictures[0]?.getAttribute('src')).toContain('picsum.photos/seed/ensign-watch-1')
  })

  it('draws a section that carries no picture at all', () => {
    const { container } = render(<Section section={RESERVE} />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(screen.getAllByRole('listitem')).toHaveLength(RESERVE.items.length)
  })
})
