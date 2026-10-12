import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Bar } from './Bar'
import { DESKTOP_NAV_ID, NAV, PANEL_ID, TOGGLER_LABEL } from '../lib/site'

describe('Bar — the floating card and everything on it', () => {
  it('floats a white rounded card that turns black below 992px', () => {
    render(<Bar />)

    const card = screen.getByTestId('bar')

    expect(card.className).toContain('bg-card')
    expect(card.className).toContain('rounded-card')
    expect(card.className).toContain('shadow-card')
    expect(card.className).toContain('p-[10px]')
    expect(card.className).toContain('relative')
    expect(card.className).toContain('max-lg:bg-card-mobile')
    expect(card.className).not.toMatch(/sticky|fixed/)
  })

  it('holds the wordmark, the circles, the toggler, the wide list and the panel, in that order', () => {
    render(<Bar />)

    const row = screen.getByTestId('card-row')

    expect(Array.from(row.children).map((child) => child.tagName)).toEqual([
      'A',
      'UL',
      'BUTTON',
      'NAV',
      'DIV',
    ])
    expect(screen.getByTestId('social')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: TOGGLER_LABEL })).toBeInTheDocument()
    expect(row.lastElementChild).toHaveAttribute('id', PANEL_ID)
  })

  it('reads all five rows into the wide list, with one of them current', () => {
    render(<Bar />)

    expect(
      screen
        .getAllByRole('link')
        .filter((row) => row.getAttribute('href')?.startsWith('#'))
        .map((row) => row.textContent),
    ).toEqual(['Windlass', ...NAV.map((item) => item.label)])
    expect(screen.getByTestId(DESKTOP_NAV_ID).querySelectorAll('a')).toHaveLength(5)
  })

  it('opens the same five rows into the panel and folds it away again on a row', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(screen.queryByTestId('panel')).toBeNull()
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggler)

    expect(toggler).toHaveAttribute('aria-expanded', 'true')

    const panel = screen.getByTestId('panel')

    expect(panel.querySelectorAll('a')).toHaveLength(5)

    const row = panel.querySelector('a') as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(screen.queryByTestId('panel')).toBeNull()
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
  })

  it('travels the panel between a zero and a full track, and folds it on Escape', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    const panel = document.getElementById(PANEL_ID) as HTMLElement

    expect(panel.className).toContain('grid-rows-[0fr]')
    expect(panel.className).toContain('basis-full')
    expect(panel.className).toContain('lg:hidden')

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    expect(panel.className).toContain('grid-rows-[1fr]')

    await user.keyboard('{Escape}')

    expect(screen.queryByTestId('panel')).toBeNull()
  })
})
