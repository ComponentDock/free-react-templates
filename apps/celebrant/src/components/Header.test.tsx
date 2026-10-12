import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  ACTIVE_NAV_LABEL,
  BRAND,
  MENU_CLOSE_LABEL,
  MENU_TOGGLE_LABEL,
  NAV_CTA_LABEL,
  NAV_ITEMS,
} from '../lib/site'
import { tokens } from '../test/match-media'

describe('Header', () => {
  it('pins a white bar carrying the wordmark, six rows and the quote pill', () => {
    const { container } = render(<Header />)

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('sticky', 'top-0', 'bg-white')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(BRAND)
    expect(tokens(screen.getByRole('heading', { level: 1 }))).toEqual(
      expect.arrayContaining(['font-body', 'text-[1.2rem]', 'font-black', 'uppercase']),
    )

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const links = within(nav).getAllByRole('link')

    expect(links.map((link) => link.textContent?.trim())).toEqual([
      ...NAV_ITEMS.map((item) => item.label),
      NAV_CTA_LABEL,
    ])

    // The wide column is hidden below xl; jsdom applies no CSS, so the markup carries the gate.
    expect(tokens(container.querySelector('nav')?.parentElement as Element)).toContain('hidden')
  })

  it('marks the live row black with the mint bar and leaves the rest muted', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const links = within(nav).getAllByRole('link')
    const live = links[0] as HTMLElement
    const resting = links[1] as HTMLElement

    expect(live).toHaveAttribute('aria-current', 'page')
    expect(live.textContent?.trim()).toBe(ACTIVE_NAV_LABEL)
    expect(tokens(live)).toContain('text-ink')
    expect(tokens(live)).not.toContain('text-nav')
    expect(tokens(resting)).toContain('text-nav')
    expect(tokens(resting)).toContain('hover:text-ink')
    expect(resting).not.toHaveAttribute('aria-current')

    const bar = within(nav).getByTestId('active-bar')

    expect(bar).toHaveAttribute('aria-hidden', 'true')
    expect(bar).toHaveClass('bg-brand', 'h-[2px]')
  })

  it('anchors every row on the single page and sends the pill to the newsletter block', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const links = within(nav).getAllByRole('link')

    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#home',
      '#services',
      '#services',
      '#faq',
      '#faq',
      '#contact',
      '#contact',
    ])

    const cta = links[6] as HTMLElement

    expect(tokens(cta)).toEqual(expect.arrayContaining(['bg-cta', 'rounded-[30px]', 'text-white']))
    expect(tokens(cta)).not.toContain('bg-primary-600')
  })

  it('unfolds the rows behind a labelled disclosure that holds nothing while shut', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: MENU_TOGGLE_LABEL })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('#celebrant-menu')).toBeNull()

    fireEvent.click(toggle)

    expect(screen.getByRole('button', { name: MENU_CLOSE_LABEL })).toHaveAttribute('aria-expanded', 'true')

    const panel = document.querySelector('#celebrant-menu') as HTMLElement

    expect(panel).not.toBeNull()
    expect(within(panel).getAllByRole('link')).toHaveLength(NAV_ITEMS.length + 1)
  })

  it('closes the unfolded rows on escape and on a chosen row, and stays put on any other key', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: MENU_TOGGLE_LABEL })

    fireEvent.click(toggle)
    fireEvent.keyDown(screen.getByRole('button', { name: MENU_CLOSE_LABEL }), { key: 'ArrowDown' })
    expect(screen.getByRole('button', { name: MENU_CLOSE_LABEL })).toBeInTheDocument()

    fireEvent.keyDown(screen.getByRole('button', { name: MENU_CLOSE_LABEL }), { key: 'Escape' })
    expect(screen.getByRole('button', { name: MENU_TOGGLE_LABEL })).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(screen.getByRole('button', { name: MENU_TOGGLE_LABEL }))

    const panel = document.querySelector('#celebrant-menu') as HTMLElement
    const row = within(panel).getByRole('link', { name: 'Services' })

    fireEvent.click(row)

    expect(document.querySelector('#celebrant-menu')).toBeNull()
    expect(screen.getByRole('button', { name: MENU_TOGGLE_LABEL })).toHaveAttribute('aria-expanded', 'false')
  })
})
