import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'
import { NAV, PRIMARY_NAV_LABEL } from '../lib/site'

const ITEM = NAV[1]!
const CHILDREN = ITEM.children

/**
 * In-page anchors are neutralised before a press: jsdom turns a click on `href="#…"` into
 * hash navigation, which can race React's delegated handler and silently drop the test.
 */
function neutralize(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

function renderDropdown(onNavigate: () => void = () => {}) {
  return render(
    <nav aria-label={PRIMARY_NAV_LABEL}>
      <ul>
        <Dropdown item={ITEM} onNavigate={onNavigate} />
      </ul>
    </nav>,
  )
}

describe('Dropdown — the wide strip own disclosure', () => {
  it('stays shut at rest, with its caret and its state on the trigger', () => {
    renderDropdown()

    const trigger = screen.getByRole('link', { name: ITEM.label })

    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', 'rigging-panel')
    expect(trigger).toHaveAttribute('href', ITEM.href)
    expect(trigger.querySelector('svg')).not.toBeNull()
    expect(trigger.querySelector('span[aria-hidden="true"]')?.className).toContain('bg-accent')
    expect(screen.queryByTestId('rigging-panel')).toBeNull()
    expect(screen.getByTestId('rigging-row')).toHaveAttribute('data-open', 'false')
  })

  it('opens on a pointer resting on its row and closes when the pointer leaves', () => {
    renderDropdown()

    const row = screen.getByTestId('rigging-row')

    fireEvent.mouseEnter(row)

    const panel = screen.getByTestId('rigging-panel')

    expect(panel).toHaveAttribute('data-align', 'left')
    expect(panel.className).toContain('min-w-[160px]')
    expect(panel.className).toContain('rounded-panel')
    expect(panel.className).toContain('shadow-panel')
    expect(screen.getByRole('link', { name: ITEM.label })).toHaveAttribute('aria-expanded', 'true')
    expect(
      within(panel)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(CHILDREN.map((child) => child.label))

    fireEvent.mouseLeave(row)

    expect(screen.queryByTestId('rigging-panel')).toBeNull()
  })

  it('toggles on a click of its trigger, and covers every sub-destination', async () => {
    const user = userEvent.setup()

    renderDropdown()

    const trigger = screen.getByRole('link', { name: ITEM.label })

    // A plain click, so the pointer path does not get there first: with a real pointer the
    // row opens on the way in and the click then dismisses it, exactly as the design binds both.
    fireEvent.click(trigger)

    const links = within(screen.getByTestId('rigging-panel')).getAllByRole('link')

    expect(links.map((link) => link.getAttribute('href'))).toEqual(
      CHILDREN.map((child) => child.href),
    )

    for (const link of links) {
      expect(link.className).toContain('text-[12px]')
      expect(link.className).toContain('hover:bg-accent')
      expect(link.className).toContain('hover:text-white')
    }

    fireEvent.click(trigger)

    expect(screen.queryByTestId('rigging-panel')).toBeNull()

    await user.click(document.body)

    expect(screen.queryByTestId('rigging-panel')).toBeNull()
  })

  it('closes on a press outside its row', async () => {
    const user = userEvent.setup()

    renderDropdown()

    fireEvent.mouseEnter(screen.getByTestId('rigging-row'))

    expect(screen.getByTestId('rigging-panel')).toBeInTheDocument()

    await user.click(document.body)

    expect(screen.queryByTestId('rigging-panel')).toBeNull()
  })

  it('reports the destination it was asked for and closes behind it', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    renderDropdown(onNavigate)

    fireEvent.mouseEnter(screen.getByTestId('rigging-row'))

    const first = within(screen.getByTestId('rigging-panel')).getByRole('link', {
      name: CHILDREN[0]!.label,
    })

    neutralize(first)
    await user.click(first)

    expect(onNavigate).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('rigging-panel')).toBeNull()
  })

  it('opens on ArrowDown and lands on the first row, stepping and wrapping inside it', async () => {
    const user = userEvent.setup()

    renderDropdown()

    const trigger = screen.getByRole('link', { name: ITEM.label })

    trigger.focus()
    await user.keyboard('{ArrowDown}')

    const links = within(screen.getByTestId('rigging-panel')).getAllByRole('link')

    expect(document.activeElement).toBe(links[0])

    await user.keyboard('{ArrowDown}')

    expect(document.activeElement).toBe(links[1])

    await user.keyboard('{ArrowUp}{ArrowUp}')

    expect(document.activeElement).toBe(links[3])
  })

  it('dismisses itself on Escape and hands focus back to the trigger', async () => {
    const user = userEvent.setup()

    renderDropdown()

    const trigger = screen.getByRole('link', { name: ITEM.label })

    trigger.focus()
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Escape}')

    expect(screen.queryByTestId('rigging-panel')).toBeNull()
    expect(document.activeElement).toBe(trigger)
  })

  it('hangs from the trigger own right edge when it would leave the viewport', () => {
    renderDropdown()

    const trigger = screen.getByRole('link', { name: ITEM.label })

    trigger.getBoundingClientRect = () => ({ right: window.innerWidth - 4 }) as DOMRect

    fireEvent.click(trigger)

    const panel = screen.getByTestId('rigging-panel')

    expect(panel).toHaveAttribute('data-align', 'right')
    expect(panel.className).toContain('right-0')
    expect(panel.className).toContain('left-auto')
    expect(panel.className).not.toContain('left-0')
  })
})
