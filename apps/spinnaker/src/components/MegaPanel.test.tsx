import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MegaPanel } from './MegaPanel'
import { CARDS, MENU, MENU_NAV_LABEL } from '../lib/site'
import {
  megaCardColumnClass,
  megaCardLinkClass,
  megaCardMetaClass,
  megaCardTitleClass,
  megaClass,
  megaStaticClass,
} from '../lib/styles'

const DESKTOP = { id: 'panel-a', labelledBy: 'trigger-a', variant: 'desktop' } as const

describe('MegaPanel — the wide panel behind the last row', () => {
  it('hangs as wide as the bar, flush with its left edge, on the design’s own white', () => {
    render(<MegaPanel {...DESKTOP} onNavigate={() => {}} />)

    const panel = screen.getByTestId('panel-a')

    expect(panel.className).toBe(megaClass)
    expect(panel).toHaveAttribute('aria-labelledby', 'trigger-a')
    expect(panel.className).toContain('w-full')
    expect(panel.className).toContain('left-0')
    expect(panel.className).toContain('mt-[2px]')
    expect(panel.className).toContain('bg-white')
    expect(panel.className).toContain('p-6')
  })

  it('stands the same panel in the folded chrome as a static block on the near-black', () => {
    render(<MegaPanel id="panel-b" labelledBy="trigger-b" variant="panel" onNavigate={() => {}} />)

    const panel = screen.getByTestId('panel-b')

    expect(panel.className).toBe(megaStaticClass)
    expect(panel.className).toContain('static')
    expect(panel.className).toContain('bg-mega')
    expect(panel.className).toContain('p-0')
  })

  it('puts the four links first, in the model’s own order', () => {
    render(<MegaPanel {...DESKTOP} onNavigate={() => {}} />)

    const links = within(screen.getByRole('list', { name: MENU_NAV_LABEL })).getAllByRole('link')

    expect(links.map((link) => link.textContent)).toEqual(MENU.map((item) => item.label))
    expect(links.map((link) => link.getAttribute('href'))).toEqual(MENU.map((item) => item.href))
  })

  it('follows a chosen link and reports it, so the surface above can fold away', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<MegaPanel {...DESKTOP} onNavigate={onNavigate} />)

    const link = screen.getByRole('link', { name: MENU[0]!.label })

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('gives each of the three cards its own picture, title and meta line', () => {
    render(<MegaPanel {...DESKTOP} onNavigate={() => {}} />)

    const cards = CARDS.map((card) => screen.getByRole('link', { name: `${card.title} preview` }))

    expect(cards.map((card) => card.getAttribute('href'))).toEqual(
      CARDS.map((card) => `#${card.id}`),
    )

    const titles = CARDS.map((card) => screen.getByRole('link', { name: card.title }))

    expect(titles.map((title) => title.getAttribute('href'))).toEqual(
      CARDS.map((card) => `#${card.id}`),
    )
    expect(titles.map((title) => title.className)).toEqual(CARDS.map(() => megaCardLinkClass))

    for (const [index, card] of CARDS.entries()) {
      const picture = cards[index]!.querySelector('img')
      const heading = screen.getByRole('heading', { level: 3, name: card.title })

      expect(picture?.getAttribute('src')).toBe(card.image)
      expect(heading.className).toBe(megaCardTitleClass)
      expect(screen.getByText(card.meta).className).toBe(megaCardMetaClass)
    }
  })

  it('holds every card’s two anchors inside the column that hides below 768px', () => {
    render(<MegaPanel {...DESKTOP} onNavigate={() => {}} />)

    for (const card of CARDS) {
      const column = screen.getByRole('link', { name: `${card.title} preview` }).parentElement

      expect(column?.className).toBe(megaCardColumnClass)
      expect(within(column as HTMLElement).getAllByRole('link')).toHaveLength(2)
    }
  })
})
