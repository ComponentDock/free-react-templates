import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import { SECTIONS, HEADER_OFFSET } from '../lib/site'

const withPictures = SECTIONS[0]!
const withoutPictures = SECTIONS[4]!

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
      expect(picture.getAttribute('src')).toContain('https://picsum.photos/seed/windlass-')
      expect(picture).toHaveAttribute('alt', '')
    }
  })

  it('renders a section with no pictures at all as a plain list of rows', () => {
    const { container } = render(<Section section={withoutPictures} />)

    expect(withoutPictures.items.every((item) => item.image === undefined)).toBe(true)
    expect(container.querySelectorAll('li')).toHaveLength(withoutPictures.items.length)
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })
})
