import { render, screen, within } from '@testing-library/react'
import { HEADER_OFFSET, SECTIONS, SUB_PAGES } from '../lib/site'
import { Section } from './Section'

const galley = SECTIONS[1]!
const story = SECTIONS[3]!
const supplies = SECTIONS[2]!

describe('Section', () => {
  it('materialises one declared target as an eyebrow, a heading and a body, anchored clear of the bar', () => {
    const { container } = render(<Section section={story} subPages={[]} />)

    const band = container.firstElementChild as HTMLElement

    expect(band.id).toBe('story')
    expect(band).toHaveAttribute('aria-labelledby', 'story-heading')
    expect(band.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
    expect(screen.getByText(story.eyebrow)).toBeInTheDocument()
    expect(screen.getByText(story.heading)).toBeInTheDocument()
    expect(screen.getByText(story.body)).toBeInTheDocument()
    expect(band.querySelector('ul')).toBeNull()
  })

  it('renders a list section as its cards, and a section without one as text alone', () => {
    render(<Section section={galley} subPages={[]} />)

    const items = screen.getByTestId('galley-items')

    expect(Array.from(items.children).map((card) => card.querySelector('h3')?.textContent)).toEqual(
      galley.items?.map((item) => item.title),
    )
    expect(within(items).getByText(galley.items?.[0]?.body as string)).toBeInTheDocument()
    expect(screen.queryByTestId('galley-subpages')).toBeNull()
  })

  it('hangs the dropdown destinations inside the section they belong to, each anchored the same way', () => {
    const subPages = SUB_PAGES.filter((page) => page.parent === supplies.id)

    render(<Section section={supplies} subPages={subPages} />)

    const block = screen.getByTestId('supplies-subpages')

    expect(subPages).toHaveLength(3)

    for (const page of subPages) {
      const panel = document.getElementById(page.id) as HTMLElement

      expect(block.contains(panel)).toBe(true)
      expect(panel.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
      expect(within(panel).getByText(page.heading).id).toBe(`${page.id}-heading`)
      expect(within(panel).getByText(page.body)).toBeInTheDocument()
    }
  })
})
