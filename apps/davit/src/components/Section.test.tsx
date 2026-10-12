import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import { SECTIONS, HEADER_OFFSET, menuDestinations } from '../lib/site'
import type { Section as SectionModel } from '../lib/site'

const withPictures = SECTIONS[0]!
const yard = SECTIONS[5]!

/** A section of the plainest kind: no pictures to draw and nothing anchored inside it. */
const bare: SectionModel = {
  id: 'bare',
  eyebrow: 'Bare',
  heading: 'Nothing but words',
  body: 'A section that lists one row and draws no picture at all.',
  items: [{ title: 'One row', body: 'With nothing but its own two lines.' }],
}

describe('Section — one destination, materialised', () => {
  it('is a landmark of its own, kept clear of the card that sent the visitor here', () => {
    render(<Section section={withPictures} />)

    const section = screen.getByTestId(`section-${withPictures.id}`)

    expect(section).toHaveAttribute('id', withPictures.id)
    expect(section).toHaveAttribute('aria-labelledby', `${withPictures.id}-heading`)
    expect(section).toHaveStyle({ scrollMarginTop: `${HEADER_OFFSET}px` })
    expect(section.className).toContain('scroll-mt-20')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(withPictures.heading)
    expect(screen.getByText(withPictures.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(withPictures.body)).toBeInTheDocument()
  })

  it('lists its own rows, with a placeholder picture on the ones that carry one', () => {
    const { container } = render(<Section section={withPictures} />)
    const pictures = container.querySelectorAll('img')

    expect(container.querySelectorAll('li')).toHaveLength(withPictures.items.length)
    expect(pictures).toHaveLength(
      withPictures.items.filter((item) => item.image !== undefined).length,
    )

    for (const picture of Array.from(pictures)) {
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/davit-')
      expect(picture).toHaveAttribute('alt', '')
    }
  })

  it('renders a section with no pictures at all as a plain list of rows', () => {
    const { container } = render(<Section section={bare} />)

    expect(container.querySelectorAll('li')).toHaveLength(1)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(screen.getByText(bare.items[0]!.title)).toBeInTheDocument()
  })

  it('anchors the cards something else points at, and leaves the plain ones unanchored', () => {
    const { container } = render(<Section section={yard} />)

    expect(container.querySelectorAll('li[id]')).toHaveLength(menuDestinations().length)

    for (const target of menuDestinations()) {
      const card = container.querySelector(target) as HTMLElement

      expect(card.tagName).toBe('LI')
      expect(card.className).toContain('scroll-mt-20')
    }
  })
})
