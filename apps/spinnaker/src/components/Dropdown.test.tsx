import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'
import {
  CARDS,
  MENU,
  MENU_ID,
  MENU_ID_PANEL,
  MENU_LABEL,
  MENU_TRIGGER_ID,
  MENU_TRIGGER_PANEL_ID,
} from '../lib/site'
import { megaStaticClass, menuCaretClass, menuItemClass, navRowClass } from '../lib/styles'

function renderRow(variant: 'desktop' | 'panel', onNavigate: () => void = () => {}) {
  return render(
    <ul>
      <Dropdown variant={variant} onNavigate={onNavigate} />
    </ul>,
  )
}

/** The panel's four links, taken from the panel's own list rather than from every anchor under it. */
const rows = (): HTMLAnchorElement[] => {
  const list = screen.getByTestId(MENU_ID).querySelector('ul') as HTMLUListElement

  return Array.from(list.querySelectorAll('a'))
}

describe('Dropdown — the last row and the panel behind it', () => {
  it('keeps the design’s own caret after its label and opens onto nothing while shut', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    expect(trigger.id).toBe(MENU_TRIGGER_ID)
    expect(trigger.tagName).toBe('BUTTON')
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', MENU_ID)
    expect(trigger.querySelector('span')?.className).toBe(menuCaretClass)
    expect(trigger.className).toBe(navRowClass({ variant: 'desktop', current: false }))
    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('sets its own box static, so the panel measures against the bar and not the row', () => {
    const { container } = renderRow('desktop')

    const row = container.querySelector('li')

    expect(row?.className).toBe(menuItemClass)
    expect(row?.className).not.toContain('relative')
  })

  it('opens on a hover, shuts when the pointer leaves, and paints the row amber while out', () => {
    const { container } = renderRow('desktop')

    const row = container.querySelector('li') as HTMLElement
    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    fireEvent.mouseEnter(row)

    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger.className).toContain('text-accent')

    fireEvent.mouseLeave(row)

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles on a press, and shuts on a press anywhere outside its own box', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })
    const outside = document.createElement('button')

    document.body.append(outside)

    fireEvent.click(trigger)
    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()

    fireEvent.pointerDown(trigger)
    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()

    fireEvent.pointerDown(outside)
    expect(screen.queryByTestId(MENU_ID)).toBeNull()

    fireEvent.click(trigger)
    fireEvent.click(trigger)
    expect(screen.queryByTestId(MENU_ID)).toBeNull()

    outside.remove()
  })

  it('opens from the keyboard on ArrowDown and lands on the first of its four links', async () => {
    const user = userEvent.setup()

    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    trigger.focus()

    await user.keyboard('a')
    expect(screen.queryByTestId(MENU_ID)).toBeNull()

    await user.keyboard('{ArrowDown}')

    const links = rows()

    expect(links).toHaveLength(MENU.length)
    expect(document.activeElement).toBe(links[0])
  })

  it('walks its links with the arrow keys and stays put at the first', async () => {
    const user = userEvent.setup()

    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    trigger.focus()
    await user.keyboard('{ArrowDown}')

    const links = rows()

    await user.keyboard('{ArrowDown}')
    expect(document.activeElement).toBe(links[1])

    await user.keyboard('{ArrowUp}')
    expect(document.activeElement).toBe(links[0])

    await user.keyboard('{ArrowUp}')
    expect(document.activeElement).toBe(links[0])

    await user.keyboard('a')
    expect(document.activeElement).toBe(links[0])
    expect(
      within(screen.getByTestId(MENU_ID))
        .getAllByRole('link')
        .slice(0, MENU.length)
        .map((link) => link.textContent),
    ).toEqual(MENU.map((item) => item.label))
  })

  it('shuts on Escape and hands focus back to the trigger that opened it', async () => {
    const user = userEvent.setup()

    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    trigger.focus()
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{Escape}')

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
    expect(document.activeElement).toBe(trigger)
  })

  it('follows a chosen link and reports it, so the surface above can fold itself away', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    renderRow('desktop', onNavigate)

    fireEvent.mouseEnter(screen.getByRole('button', { name: MENU_LABEL }).parentElement!)

    const link = screen.getByRole('link', { name: MENU[0]!.label })

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(onNavigate).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('stands the same panel in the folded chrome, on its own ids and its own row', async () => {
    const user = userEvent.setup()

    renderRow('panel')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    expect(trigger.id).toBe(MENU_TRIGGER_PANEL_ID)
    expect(trigger).toHaveAttribute('aria-controls', MENU_ID_PANEL)
    expect(trigger.className).toBe(navRowClass({ variant: 'panel', current: false }))
    expect(screen.queryByTestId(MENU_ID_PANEL)).toBeNull()

    fireEvent.click(trigger)

    const panel = screen.getByTestId(MENU_ID_PANEL)

    expect(panel.className).toBe(megaStaticClass)
    expect(panel.className).toContain('bg-mega')
    expect(panel).toHaveAttribute('aria-labelledby', MENU_TRIGGER_PANEL_ID)
    expect(within(panel).getAllByRole('link')).toHaveLength(MENU.length + CARDS.length * 2)

    await user.keyboard('{Escape}')

    expect(screen.queryByTestId(MENU_ID_PANEL)).toBeNull()
  })

  it('stacks the folded row’s trigger and panel in one full-width box', () => {
    renderRow('panel')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    expect(trigger.parentElement?.className).toContain('w-full')

    fireEvent.click(trigger)

    const panel = screen.getByTestId(MENU_ID_PANEL)

    expect(panel.parentElement?.parentElement).toBe(trigger.parentElement)
  })

  it('leaves the bar’s own row unboxed, so its panel measures against the bar', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    expect(trigger.parentElement?.className).not.toContain('w-full')

    fireEvent.click(trigger)

    const panel = screen.getByTestId(MENU_ID)

    expect(panel.parentElement?.parentElement).toBe(trigger.parentElement)
  })
})
