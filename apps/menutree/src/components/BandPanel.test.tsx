import { render, screen } from '@testing-library/react'
import { BandPanel } from './BandPanel'
import { PANELS, type Panel } from '../lib/site'

function panel(over: Partial<Panel>): Panel {
  return {
    id: 'home',
    kind: 'lead',
    eyebrow: 'Eyebrow',
    heading: 'Heading',
    intro: 'Intro line.',
    items: [],
    ...over,
  }
}

describe('BandPanel', () => {
  it('renders a lead panel as a heading + one line with no body', () => {
    const { container } = render(<BandPanel panel={panel({})} />)
    const section = container.querySelector('section') as HTMLElement

    expect(section).toHaveAttribute('id', 'home')
    expect(section).toHaveClass('scroll-mt-24')
    expect(screen.getByRole('heading', { level: 2, name: 'Heading' })).toBeInTheDocument()
    expect(screen.getByText('Intro line.')).toBeInTheDocument()
    expect(container.querySelector('ul')).toBeNull()
  })

  it('lays people / plans / offerings / quotes / posts out as squared cards', () => {
    const { container } = render(
      <BandPanel
        panel={panel({
          id: 'team',
          kind: 'people',
          items: [
            {
              title: 'Wren',
              note: 'Lead.',
              meta: 'Design',
              photo: 'https://picsum.photos/seed/x/1',
            },
            { title: 'Ira', note: 'Builds things.' },
          ],
        })}
      />,
    )

    const cards = container.querySelectorAll('ul > li')
    expect(cards).toHaveLength(2)
    expect(screen.getByText('Wren')).toBeInTheDocument()
    expect(screen.getByText('Design').tagName).toBe('SPAN')
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(container.querySelector('img')).toHaveAttribute('src', 'https://picsum.photos/seed/x/1')
  })

  it('rules question rows off with the accent border', () => {
    const { container } = render(
      <BandPanel
        panel={panel({
          id: 'faq',
          kind: 'questions',
          items: [{ title: 'Why?', note: 'Because.' }],
        })}
      />,
    )

    expect(container.querySelector('ul > li')).toHaveClass('border-l-2', 'border-brand')
    expect(screen.getByText('Because.')).toBeInTheDocument()
  })

  it('captions seeded photo frames with the item titles as their alt text', () => {
    const { container } = render(
      <BandPanel
        panel={panel({
          id: 'gallery',
          kind: 'photos',
          items: [{ title: 'Band corner', note: '', photo: 'https://picsum.photos/seed/g/1' }],
        })}
      />,
    )

    expect(container.querySelector('img')).toHaveAttribute('alt', 'Band corner')
  })

  it('turns contact rows into the links themselves', () => {
    render(
      <BandPanel
        panel={panel({
          id: 'contact',
          kind: 'contact',
          items: [
            { title: 'E-mail', note: 'hi@menutree.example', href: 'mailto:hi@menutree.example' },
          ],
        })}
      />,
    )

    expect(screen.getByRole('link', { name: 'hi@menutree.example' })).toHaveAttribute(
      'href',
      'mailto:hi@menutree.example',
    )
  })

  it('materialises every declared anchor target in menu order', () => {
    const { container } = render(
      <>
        {PANELS.map((item) => (
          <BandPanel key={item.id} panel={item} />
        ))}
      </>,
    )

    expect(Array.from(container.querySelectorAll('section[id]')).map((el) => el.id)).toEqual([
      'home',
      'about',
      'team',
      'pricing',
      'faq',
      'gallery',
      'services',
      'testimonials',
      'blog',
      'contact',
    ])
  })
})
