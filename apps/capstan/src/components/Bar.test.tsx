import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Bar } from './Bar'
import {
  DESKTOP_NAV_ID,
  NAV,
  PANEL_ID,
  PANEL_NAV_ID,
  PRIMARY_NAV_LABEL,
  TOGGLER_LABEL,
} from '../lib/site'

/**
 * In-page anchors are neutralised before a press: jsdom turns a click on `href="#…"` into
 * hash navigation, which can race React's delegated handler and silently drop the test.
 */
function neutralize(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('Bar — the quiet strip with the find field at its end', () => {
  it('renders the wide list in the flow, with the toggler waiting for a narrow width', () => {
    render(<Bar />)

    const bar = screen.getByRole('navigation', { name: PRIMARY_NAV_LABEL })

    expect(bar).toHaveAttribute('data-testid', 'bar')
    expect(bar.className).toContain('bg-transparent')
    expect(bar.className).toContain('border-hairline')
    expect(bar.className).toContain('max-lg:bg-bar-dark')
    expect(bar.className).not.toMatch(/sticky|fixed/)

    expect(within(screen.getByTestId(DESKTOP_NAV_ID)).getAllByRole('link')).toHaveLength(6)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler.className).toContain('lg:hidden')

    const collapse = screen.getByTestId('bar-collapse')

    expect(collapse).toHaveAttribute('id', PANEL_ID)
    expect(collapse).toHaveAttribute('data-open', 'false')
    expect(collapse.className).toContain('grid-rows-[0fr]')
    expect(collapse.className).toContain('duration-[350ms]')
    expect(screen.queryByTestId('panel-nav')).toBeNull()
    expect(document.getElementById(PANEL_NAV_ID)).toBeNull()
  })

  it('keeps the find field last in the bar whatever its DOM place, and off the page below 768px', () => {
    render(<Bar />)

    const row = screen.getByTestId('bar-row')
    const search = screen.getByRole('search')

    expect(row.className).toContain('flex-nowrap')
    expect(row.className).toContain('max-lg:flex-wrap')

    const searchRow = screen.getByTestId('search-row')

    expect(searchRow.className).toContain('lg:order-last')
    expect(searchRow.className).toContain('hidden')
    expect(searchRow.className).toContain('md:block')
    expect(search).toBeInTheDocument()
    expect(row.contains(search)).toBe(true)
  })

  it('puts the wordmark first and the toggler third in the bar own DOM order', () => {
    render(<Bar />)

    const row = screen.getByTestId('bar-row')

    expect(row.children[0]).toBe(screen.getByRole('link', { name: 'Capstan' }))
    expect(row.children[1]).toBe(screen.getByTestId('search-row'))
    expect(row.children[2]).toBe(screen.getByRole('button', { name: TOGGLER_LABEL }))
    expect(row.children[3]).toBe(screen.getByTestId('bar-wide'))
  })

  it('unfolds the panel on the toggler and folds the same six rows away again', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    await user.click(toggler)

    const collapse = screen.getByTestId('bar-collapse')

    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(collapse).toHaveAttribute('data-open', 'true')
    expect(collapse.className).toContain('grid-rows-[1fr]')

    const panel = screen.getByTestId('panel-nav')

    // Six rows plus the four rows of the open sub-list under the disclosure.
    expect(within(panel).getAllByRole('link')).toHaveLength(10)

    await user.click(toggler)

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('panel-nav')).toBeNull()
  })

  it('folds the panel away when a destination inside it is chosen', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    const row = within(screen.getByTestId('panel-nav')).getByRole('link', { name: NAV[3]!.label })

    neutralize(row)
    await user.click(row)

    expect(screen.queryByTestId('panel-nav')).toBeNull()
  })

  it('folds the panel away on Escape', async () => {
    const user = userEvent.setup()

    render(<Bar />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))
    await user.keyboard('{Escape}')

    expect(screen.queryByTestId('panel-nav')).toBeNull()
  })
})
