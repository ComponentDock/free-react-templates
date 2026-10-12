import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DesktopNav } from './DesktopNav'
import { DESKTOP_NAV_ID, NAV } from '../lib/site'

/**
 * In-page anchors are neutralised before a press: jsdom turns a click on `href="#…"` into
 * hash navigation, which can race React's delegated handler and silently drop the test.
 */
function neutralize(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('DesktopNav — the strip own list', () => {
  it('renders the six rows in the design own order, floated into the middle', () => {
    render(<DesktopNav onNavigate={() => {}} />)

    const list = screen.getByTestId(DESKTOP_NAV_ID)

    expect(list.className).toContain('items-stretch')
    expect(list.className).toContain('mx-auto')

    const rows = within(list).getAllByRole('link')

    expect(rows.map((row) => row.textContent?.replace(/\s+/g, ' ').trim())).toEqual(
      NAV.map((item) => item.label),
    )

    const current = within(list).getAllByRole('link', { current: 'page' })

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent(NAV[0]!.label)
  })

  it('reports an activation from any of its rows', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<DesktopNav onNavigate={onNavigate} />)

    const row = screen.getByRole('link', { name: NAV[2]!.label })

    neutralize(row)
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
