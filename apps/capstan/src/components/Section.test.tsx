import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import { HEADER_OFFSET, SECTIONS, shot } from '../lib/site'

const WITH_PICTURE = SECTIONS[0]!
const WITHOUT_PICTURE = SECTIONS.find((section) =>
  section.items.every((item) => item.image === undefined),
)!

describe('Section — one materialised destination', () => {
  it('labels itself with its own heading and keeps clear of the strip', () => {
    render(<Section section={WITH_PICTURE} />)

    const section = screen.getByTestId(`section-${WITH_PICTURE.id}`)

    expect(section).toHaveAttribute('id', WITH_PICTURE.id)
    expect(section).toHaveStyle({ scrollMarginTop: `${HEADER_OFFSET}px` })
    expect(section.className).toContain('scroll-mt-20')

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveAttribute('id', `${WITH_PICTURE.id}-heading`)
    expect(heading.textContent).toBe(WITH_PICTURE.heading)
    expect(section).toHaveAttribute('aria-labelledby', `${WITH_PICTURE.id}-heading`)
    expect(screen.getByText(WITH_PICTURE.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(WITH_PICTURE.body)).toBeInTheDocument()
  })

  it('draws a card with a picture where the model declares one, and none where it does not', () => {
    const { container, unmount } = render(<Section section={WITH_PICTURE} />)

    const pictures = Array.from(container.querySelectorAll('img'))

    expect(pictures).toHaveLength(WITH_PICTURE.items.filter((item) => item.image).length)
    expect(pictures[0]).toHaveAttribute('src', shot('berth-1', 800, 600))

    expect(screen.getAllByRole('listitem')).toHaveLength(WITH_PICTURE.items.length)

    unmount()

    const bare = render(<Section section={WITHOUT_PICTURE} />)

    expect(bare.container.querySelectorAll('img')).toHaveLength(0)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(WITHOUT_PICTURE.items.length)
  })
})
