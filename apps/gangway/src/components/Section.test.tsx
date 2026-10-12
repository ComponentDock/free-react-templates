import { render, screen } from '@testing-library/react'
import { SECTIONS, SUB_PAGES } from '../lib/site'
import type { Section as SectionModel, SubPage } from '../lib/site'
import { Section } from './Section'

const section = (id: string) => SECTIONS.find((entry) => entry.id === id) as SectionModel
const subPage = (id: string) => SUB_PAGES.find((entry) => entry.id === id) as SubPage

describe('Section — one materialised destination', () => {
  it('renders its eyebrow, its heading and its body under its own id, clear of the bar', () => {
    render(<Section section={section('deck')} />)

    const rendered = screen.getByTestId('deck-section')

    expect(rendered).toHaveAttribute('id', 'deck')
    expect(rendered).toHaveAttribute('aria-labelledby', 'deck-heading')
    expect(rendered.style.scrollMarginTop).toBe('112px')
    expect(rendered).toHaveTextContent('Deck')
    expect(screen.getByRole('heading', { level: 2, name: /Two ways aboard/ })).toHaveAttribute(
      'id',
      'deck-heading',
    )
  })

  it('lists its cards, each with a title and a body', () => {
    render(<Section section={section('crew')} />)

    const cards = screen.getByTestId('crew-items')

    expect(Array.from(cards.children).map((card) => card.querySelector('h3')?.textContent)).toEqual(
      section('crew').items!.map((item) => item.title),
    )
    expect(cards.querySelector('img')).toBeNull()
  })

  it('draws a picture above the title wherever a card carries one', () => {
    render(<Section section={section('billets')} />)

    const first = section('billets').items![0]!

    expect(screen.getByAltText(first.title)).toHaveAttribute('src', first.image)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('lays a gallery out as its own grid of pictures', () => {
    render(<Section section={subPage('dry-dock')} />)

    const gallery = screen.getByTestId('dry-dock-gallery')

    expect(Array.from(gallery.querySelectorAll('img')).map((image) => image.getAttribute('alt'))).toEqual(
      subPage('dry-dock').images!.map((image) => image.alt),
    )
    expect(screen.queryByTestId('dry-dock-items')).toBeNull()
  })

  it('answers an FAQ with a question and an answer per row', () => {
    render(<Section section={subPage('questions')} />)

    const faq = screen.getByTestId('questions-faq')

    expect(Array.from(faq.querySelectorAll('dt')).map((term) => term.textContent)).toEqual(
      subPage('questions').faq!.map((entry) => entry.question),
    )
    expect(faq.querySelectorAll('dd')).toHaveLength(3)
  })

  it('mounts the section’s own form where the data carries one', () => {
    render(<Section section={section('aboard')} />)

    expect(screen.getByTestId('aboard-form')).toBeInTheDocument()
    expect(screen.queryByTestId('aboard-items')).toBeNull()
  })

  it('renders the destinations that hang off it as nested sections of their own', () => {
    render(<Section section={section('harbour')} subPages={SUB_PAGES} />)

    for (const page of SUB_PAGES) {
      const nested = screen.getByTestId(`${page.id}-section`)

      expect(nested).toHaveAttribute('id', page.id)
      expect(nested).toHaveAttribute('aria-labelledby', `${page.id}-heading`)
      expect(screen.getByRole('heading', { level: 3, name: page.heading })).toBeInTheDocument()
      expect(nested.className).toContain('border-l-2')
      expect(nested.style.scrollMarginTop).toBe('112px')
    }

    expect(subPage('chandlery').parent).toBe('harbour')
  })

  it('stays a plain top-level block when it has nothing hanging off it', () => {
    render(<Section section={section('crew')} />)

    const rendered = screen.getByTestId('crew-section')

    expect(rendered.className).toContain('border-t')
    expect(rendered.className).toContain('py-16')
    expect(rendered.className).not.toContain('border-l-2')
  })
})
