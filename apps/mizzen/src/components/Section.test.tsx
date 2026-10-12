import { render, screen, within } from '@testing-library/react'
import { Section } from './Section'
import { SECTIONS } from '../lib/site'
import { itemClass, sectionAnchorStyle, sectionClass } from '../lib/styles'

const berth = SECTIONS[0]!
const channels = SECTIONS[SECTIONS.length - 1]!

describe('Section — one materialised destination', () => {
  it('opens on its own kicker, its own heading and its own paragraph, as a landmark', () => {
    render(<Section section={berth} />)

    const block = screen.getByTestId(`section-${berth.id}`)

    expect(block).toHaveAttribute('id', berth.id)
    expect(block).toHaveAttribute('aria-labelledby', `${berth.id}-heading`)
    expect(block.className).toBe(sectionClass)
    expect(block.className).toContain('scroll-mt-[160px]')
    expect(block).toHaveStyle({ scrollMarginTop: `${sectionAnchorStyle.scrollMarginTop}px` })
    expect(screen.getByText(berth.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(berth.heading)
    expect(screen.getByText(berth.body)).toBeInTheDocument()
  })

  it('lists every card the model gives it, with a picture only where the model has one', () => {
    render(<Section section={berth} />)

    const cards = within(screen.getByTestId(`section-${berth.id}`)).getAllByRole('listitem')

    expect(cards).toHaveLength(berth.items.length)

    berth.items.forEach((item, index) => {
      const card = cards[index] as HTMLElement

      expect(card.className).toBe(itemClass)
      expect(card.textContent).toContain(item.title)
      expect(card.textContent).toContain(item.body)

      const picture = card.querySelector('img')

      if (item.image) {
        expect(picture).toHaveAttribute('src', item.image)
        expect(picture).toHaveAttribute('alt', '')
      } else {
        expect(picture).toBeNull()
      }
    })
  })

  it('carries the anchor of every card something else points at', () => {
    render(<Section section={channels} />)

    for (const item of channels.items) {
      expect(item.id).toBeTruthy()
      expect(screen.getByTestId(`section-${channels.id}`).querySelector(`#${item.id}`)).not.toBeNull()
    }
  })
})
