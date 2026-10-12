import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PanelNav } from './PanelNav'
import { NAV, PANEL_NAV_ID, PANEL_NAV_LABEL } from '../lib/site'

/**
 * In-page anchors are neutralised before a press: jsdom turns a click on `href="#…"` into
 * hash navigation, which can race React's delegated handler and silently drop the test.
 */
function neutralize(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('PanelNav — the same six rows inside the collapsing panel', () => {
  it('renders one column of six rows with the disclosing row already open', () => {
    render(<PanelNav onNavigate={() => {}} />)

    const panel = screen.getByTestId('panel-nav')

    expect(panel).toHaveAttribute('aria-label', PANEL_NAV_LABEL)

    const list = document.getElementById(PANEL_NAV_ID)!

    expect(list.className).toContain('flex-col')
    expect(list.className).toContain('pb-[10px]')

    const rows = within(list).getAllByRole('link')

    // Six rows plus the four rows of the open sub-list under the disclosure.
    expect(rows).toHaveLength(10)

    const current = within(list).getAllByRole('link', { current: 'page' })

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent(NAV[0]!.label)
    expect(current[0]!.className).toContain('text-accent')
    expect(rows.some((row) => row.className.includes('scale-x-100'))).toBe(false)
  })

  it('folds itself away when a row inside it is chosen', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<PanelNav onNavigate={onNavigate} />)

    const row = screen.getByRole('link', { name: NAV[4]!.label })

    neutralize(row)
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
