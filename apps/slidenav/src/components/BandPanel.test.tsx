import { render, screen, within } from '@testing-library/react'
import { PANELS, type Panel } from '../lib/site'
import { BandPanel } from './BandPanel'

function panel(id: string): Panel {
  const found = PANELS.find((candidate) => candidate.id === id)
  if (!found) throw new Error(`no panel in PANELS with id ${id}`)
  return found
}

describe('BandPanel', () => {
  it('leads the band with an eyebrow, a heading, an intro and the panel actions', () => {
    const { container } = render(<BandPanel panel={panel('home')} />)

    const section = container.querySelector('section') as HTMLElement

    expect(section).toHaveAttribute('id', 'home')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(panel('home').heading)
    expect(section).toHaveTextContent(panel('home').eyebrow)
    expect(section).toHaveTextContent(panel('home').intro)

    const primary = screen.getByRole('link', { name: 'See the portfolio' })
    const outline = screen.getByRole('link', { name: 'Get in touch' })

    expect(primary).toHaveAttribute('href', '#portfolio')
    expect(primary).toHaveClass('rounded-none')
    expect(primary).not.toHaveClass('border-white/70')

    expect(outline).toHaveAttribute('href', '#contact')
    expect(outline).toHaveClass('rounded-none', 'border-white/70', 'text-white')
    expect(section.querySelectorAll('ul')).toHaveLength(0)
  })

  it('lays the portfolio panel out as captioned seeded photo frames', () => {
    const { container } = render(<BandPanel panel={panel('portfolio')} />)

    const images = Array.from(container.querySelectorAll('img'))

    expect(images).toHaveLength(4)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/^https:\/\/picsum\.photos\/seed\/slidenav-/)
    }

    expect(images[0]).toHaveAttribute('alt', 'Band corner')
    expect(container.textContent).toContain('Band corner')
    expect(container.querySelectorAll('h3')).toHaveLength(0)
  })

  it('lays the story panel out as squared cards with no photo and no chip', () => {
    const { container } = render(<BandPanel panel={panel('about')} />)

    const cards = Array.from(container.querySelectorAll('li'))

    expect(cards).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('span')).toHaveLength(0)
    expect(within(container).getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(cards[0]?.firstElementChild).toHaveClass('rounded-none', 'border-white/20', 'bg-white/10')
  })

  it('lays the blog panel out as cards that carry an accent chip and a photo', () => {
    const { container } = render(<BandPanel panel={panel('blog')} />)

    expect(container.querySelectorAll('img')).toHaveLength(3)
    expect(container.querySelectorAll('h3')).toHaveLength(3)

    const chip = screen.getByText('5 min')
    expect(chip).toHaveClass('bg-accent', 'text-white', 'rounded-none')
  })

  it('lays the contact panel out as labelled rows whose value is the link', () => {
    render(<BandPanel panel={panel('contact')} />)

    const mail = screen.getByRole('link', { name: 'hello@slidenav.example' })

    expect(mail).toHaveAttribute('href', 'mailto:hello@slidenav.example')
    expect(mail).toHaveClass('decoration-accent', 'underline')
    expect(screen.getByRole('heading', { level: 3, name: 'E-mail' })).toBeInTheDocument()
  })

  it('keeps every panel on the band a single column below the tablet breakpoint', () => {
    const { container } = render(<BandPanel panel={panel('services')} />)

    expect(container.querySelector('ul')).toHaveClass('grid', 'sm:grid-cols-2', 'lg:grid-cols-3')
  })
})
