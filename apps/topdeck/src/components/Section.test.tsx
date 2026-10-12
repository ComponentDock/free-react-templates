import { render, screen, within } from '@testing-library/react'
import { HEADER_OFFSET, SECTIONS, SUB_PAGES } from '../lib/site'
import type { Section as SectionModel, SubPage } from '../lib/site'
import { Section } from './Section'

function sectionById(id: string): SectionModel {
  const found = SECTIONS.find((section) => section.id === id)

  if (!found) {
    throw new Error(`no section ${id}`)
  }

  return found
}

function subPagesOf(parent: string): SubPage[] {
  return SUB_PAGES.filter((page) => page.parent === parent)
}

describe('Section', () => {
  it('renders a list section as eyebrow, heading, body and its cards, anchored past the chrome', () => {
    render(<Section section={sectionById('programmes')} subPages={subPagesOf('programmes')} />)

    const section = screen.getByRole('region', { name: sectionById('programmes').heading })

    expect(section).toHaveClass('border-t', 'py-16')
    expect(section.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
    expect(within(section).getByText('Programmes')).toHaveClass('text-brand', 'uppercase')

    const heading = within(section).getByRole('heading', { level: 2 })

    expect(heading.id).toBe('programmes-heading')
    expect(within(section).getByText(sectionById('programmes').body)).toHaveClass('text-ink-soft')

    const items = within(section).getByTestId('programmes-items')

    expect(within(items).getAllByRole('listitem')).toHaveLength(3)
    expect(within(items).getByRole('heading', { level: 3, name: 'First Light' })).toBeInTheDocument()
    expect(within(section).queryByTestId('programmes-photos')).toBeNull()
  })

  it('renders a grid section as frames from the deterministic placeholder', () => {
    render(<Section section={sectionById('showcase')} subPages={[]} />)

    const section = screen.getByRole('region', { name: sectionById('showcase').heading })
    const photos = within(section).getByTestId('showcase-photos')
    const images = within(photos).getAllByRole('img')

    expect(images).toHaveLength(4)
    expect(images.map((image) => image.getAttribute('src'))).toEqual(
      sectionById('showcase').photos,
    )
    expect(images[0]).toHaveAttribute('alt', `${sectionById('showcase').heading} frame 1`)
    expect(images[0]).toHaveAttribute('loading', 'lazy')
    expect(within(section).queryByTestId('showcase-items')).toBeNull()
  })

  it('renders a plain section as copy only', () => {
    render(<Section section={sectionById('start')} subPages={[]} />)

    const section = screen.getByRole('region', { name: sectionById('start').heading })

    expect(within(section).getByRole('heading', { level: 2 }).id).toBe('start-heading')
    expect(within(section).queryByTestId('start-items')).toBeNull()
    expect(within(section).queryByTestId('start-photos')).toBeNull()
    expect(within(section).queryByTestId('start-subpages')).toBeNull()
  })

  it('materialises the dropdown’s destinations as anchored blocks inside the matching section', () => {
    render(<Section section={sectionById('story')} subPages={subPagesOf('story')} />)

    const section = screen.getByRole('region', { name: sectionById('story').heading })
    const grid = within(section).getByTestId('story-subpages')

    expect(within(grid).getAllByRole('region')).toHaveLength(2)

    const crew = within(grid).getByRole('region', { name: 'Four people, one helm' })

    expect(crew.id).toBe('crew')
    expect(crew.style.scrollMarginTop).toBe(`${HEADER_OFFSET}px`)
    expect(within(crew).getByRole('heading', { level: 3 }).id).toBe('crew-heading')
    expect(within(grid).getByRole('region', { name: 'The notes we hand out on day one' }).id).toBe(
      'handbooks',
    )
  })
})
