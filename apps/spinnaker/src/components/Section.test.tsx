import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import type { Section as SectionModel } from '../lib/site'
import { SECTIONS, shot } from '../lib/site'
import {
  bodyClass,
  eyebrowClass,
  itemClass,
  itemImageClass,
  itemTitleClass,
  sectionAnchorStyle,
  sectionClass,
  sectionHeadingClass,
} from '../lib/styles'

const model: SectionModel = {
  id: 'sample',
  eyebrow: 'Sample',
  heading: 'A heading of the app’s own',
  body: 'A block of the app’s own prose, written for this page.',
  items: [
    { title: 'With a picture', body: 'The first card.', image: shot('sample-1', 800, 600) },
    { title: 'Without one', body: 'The second card.' },
  ],
}

describe('Section — one materialised destination', () => {
  it('is a landmark of its own, named by its own heading and kept clear of the bar', () => {
    render(<Section section={model} />)

    const block = screen.getByTestId('section-sample')

    expect(block.tagName).toBe('SECTION')
    expect(block.id).toBe('sample')
    expect(block).toHaveAttribute('aria-labelledby', 'sample-heading')
    expect(block.className).toBe(sectionClass)
    expect(block.className).toContain('scroll-mt-[300px]')
    expect(block.style.scrollMarginTop).toBe('300px')
    expect(sectionAnchorStyle).toEqual({ scrollMarginTop: 300 })

    expect(screen.getByText(model.eyebrow).className).toBe(eyebrowClass)
    expect(screen.getByText(model.heading).className).toBe(sectionHeadingClass)
    expect(screen.getByText(model.body).className).toBe(bodyClass)
  })

  it('gives the block a level-2 heading of its own, with its own id', () => {
    render(<Section section={model} />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveTextContent(model.heading)
    expect(heading.id).toBe('sample-heading')
    expect(heading.tagName).toBe('H2')
  })

  it('lists every card, with a picture on the ones that carry one and none on the rest', () => {
    const { container } = render(<Section section={model} />)

    const cards = screen.getAllByRole('listitem')

    expect(cards).toHaveLength(model.items.length)
    expect(cards[0]?.className).toBe(itemClass)
    expect(cards[0]?.id).toBe('')
    expect(screen.getByRole('heading', { level: 3, name: 'With a picture' }).className).toBe(
      itemTitleClass,
    )

    const picture = container.querySelector('img')

    expect(picture?.getAttribute('src')).toBe(shot('sample-1', 800, 600))
    expect(picture?.className).toBe(itemImageClass)
    expect(cards[1]?.querySelector('img')).toBeNull()
  })

  it('carries an anchor on the cards something else points at', () => {
    render(<Section section={SECTIONS[3] as SectionModel} />)

    const card = document.getElementById('first-tacks')

    expect(card).not.toBeNull()
    expect(card?.className).toBe(itemClass)
  })
})
