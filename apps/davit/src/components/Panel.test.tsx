import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Panel } from './Panel'
import { CART_LABEL, CART_TRIGGER_PANEL_ID, NAV, PANEL_ID, PANEL_NAV_LABEL } from '../lib/site'

describe('Panel — the six items as a full-width line under the header row', () => {
  it('keeps its content out of the page entirely while it is shut', () => {
    render(<Panel isOpen={false} onNavigate={vi.fn()} />)

    const panel = document.getElementById(PANEL_ID) as HTMLElement

    expect(panel.className).toContain('grid-rows-[0fr]')
    expect(panel.className).toContain('basis-full')
    expect(panel.className).toContain('lg:hidden')
    expect(screen.queryByTestId('panel')).toBeNull()
    expect(screen.queryAllByRole('link')).toHaveLength(0)
    expect(screen.queryByRole('button', { name: CART_LABEL })).toBeNull()
  })

  it('stacks the same five rows, plus the cart link as the sixth item', () => {
    render(<Panel isOpen onNavigate={vi.fn()} />)

    const panel = document.getElementById(PANEL_ID) as HTMLElement
    const nav = screen.getByRole('navigation', { name: PANEL_NAV_LABEL })

    expect(panel.className).toContain('grid-rows-[1fr]')
    expect(screen.getAllByRole('link').map((row) => row.textContent)).toEqual(
      NAV.map((item) => item.label),
    )

    const list = nav.querySelector('ul') as HTMLElement

    expect(list.className).toContain('pb-[10px]')
    expect(list.querySelectorAll('li')).toHaveLength(6)
    expect(list.lastElementChild).toContainElement(
      within(list).getByRole('button', { name: CART_LABEL }),
    )
    expect(screen.getByRole('button', { name: CART_LABEL })).toHaveAttribute(
      'id',
      CART_TRIGGER_PANEL_ID,
    )
  })

  it('reports a row being followed, so the panel can fold itself away', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<Panel isOpen onNavigate={onNavigate} />)

    const row = screen.getAllByRole('link')[0] as HTMLAnchorElement

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
