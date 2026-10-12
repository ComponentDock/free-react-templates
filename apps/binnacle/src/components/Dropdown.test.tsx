import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'
import {
  MENU,
  MENU_HREF,
  MENU_ID,
  MENU_ID_PANEL,
  MENU_LABEL,
  MENU_NAV_LABEL,
  MENU_TRIGGER_ID,
  MENU_TRIGGER_PANEL_ID,
  menuDestinations,
} from '../lib/site'
import { menuClass, menuStaticClass, navRowClass } from '../lib/styles'

/** The trigger as the bar draws it, in whichever presentation the test is about. */
function renderRow(variant: 'desktop' | 'panel', onNavigate = vi.fn()) {
  render(
    <ul>
      <Dropdown variant={variant} onNavigate={onNavigate} />
    </ul>,
  )

  return onNavigate
}

describe('Dropdown — the workshop row and its four destinations', () => {
  it('draws a trigger that names the menu it opens, with the design’s own caret', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    expect(trigger).toHaveAttribute('id', MENU_TRIGGER_ID)
    expect(trigger).toHaveAttribute('type', 'button')
    expect(trigger).toHaveAttribute('aria-haspopup', 'true')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveAttribute('aria-controls', MENU_ID)
    expect(trigger.className).toContain('cursor-pointer')
    expect(trigger.className).toContain('before:scale-x-0')
    expect(trigger.querySelector('span')?.className).toContain('after:border-t-current')
    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('opens the menu on hover and shuts it again when the pointer leaves the row', () => {
    renderRow('desktop')

    const row = screen.getByRole('button', { name: MENU_LABEL }).closest('li') as HTMLLIElement

    fireEvent.mouseEnter(row)

    const menu = screen.getByTestId(MENU_ID)

    expect(menu).toHaveAttribute('aria-labelledby', MENU_TRIGGER_ID)
    expect(menu.className).toBe(menuClass)
    expect(menu.className).toContain('absolute')
    expect(menu.className).toContain('rounded-menu')
    expect(menu.className).toContain('shadow-menu')
    expect(menu.className).toContain('min-w-[160px]')
    expect(menu.querySelectorAll('a')).toHaveLength(4)
    expect((menu.querySelectorAll('a')[0] as HTMLAnchorElement).className).toContain('px-6')
    expect(Array.from(menu.querySelectorAll('a')).map((item) => item.getAttribute('href'))).toEqual(
      menuDestinations(),
    )
    expect(screen.getByRole('button', { name: MENU_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    fireEvent.mouseLeave(row)

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('toggles the menu on a press, and ignores the keys it does not claim', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    fireEvent.keyDown(trigger, { key: 'Enter' })
    expect(screen.queryByTestId(MENU_ID)).toBeNull()

    fireEvent.click(trigger)
    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('shuts on a press once a hover has already opened it, as the design’s own script does', async () => {
    const user = userEvent.setup()

    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    fireEvent.mouseEnter(trigger.closest('li') as HTMLLIElement)
    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()

    await user.click(trigger)

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('opens from the keyboard and walks the menu, stopping at either end', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    fireEvent.keyDown(trigger, { key: 'ArrowDown' })

    const menu = screen.getByTestId(MENU_ID)
    const items = Array.from(menu.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(document.activeElement).toBe(items[0])

    fireEvent.keyDown(menu, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(items[1])

    fireEvent.keyDown(menu, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(items[0])

    fireEvent.keyDown(menu, { key: 'ArrowUp' })
    expect(document.activeElement).toBe(items[0])

    fireEvent.keyDown(menu, { key: 'End' })
    expect(document.activeElement).toBe(items[0])

    items[3]!.focus()
    fireEvent.keyDown(menu, { key: 'ArrowDown' })
    expect(document.activeElement).toBe(items[3])
  })

  it('shuts on Escape and hands focus back to the trigger that opened it', async () => {
    const user = userEvent.setup()

    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    fireEvent.click(trigger)
    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()

    await user.keyboard('{Escape}')

    expect(screen.queryByTestId(MENU_ID)).toBeNull()
    expect(document.activeElement).toBe(trigger)
  })

  it('shuts on a press anywhere outside the row, and stays put on one inside it', () => {
    renderRow('desktop')

    const trigger = screen.getByRole('button', { name: MENU_LABEL })

    fireEvent.click(trigger)

    fireEvent.pointerDown(trigger)
    expect(screen.getByTestId(MENU_ID)).toBeInTheDocument()

    fireEvent.pointerDown(document.body)
    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('closes on a chosen destination and follows it out of the surface it was drawn in', async () => {
    const user = userEvent.setup()
    const onNavigate = renderRow('desktop')

    fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))

    const item = screen.getByRole('link', { name: MENU[0]!.label })

    item.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(item)

    expect(onNavigate).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId(MENU_ID)).toBeNull()
  })

  it('draws the panel’s own row as a destination, with the menu already standing open', async () => {
    const user = userEvent.setup()
    const onNavigate = renderRow('panel')

    const row = screen.getByRole('link', { name: MENU_LABEL })

    expect(row).toHaveAttribute('href', MENU_HREF)
    expect(row).toHaveAttribute('id', MENU_TRIGGER_PANEL_ID)
    expect(row.className).toBe(navRowClass({ variant: 'panel', current: false }))
    expect(screen.queryByTestId(MENU_TRIGGER_ID)).toBeNull()

    const menu = screen.getByRole('list', { name: MENU_NAV_LABEL })

    expect(menu).toHaveAttribute('id', MENU_ID_PANEL)
    expect(menu.className).toBe(menuStaticClass)
    expect(menu.className).toContain('static')
    expect(menu.className).toContain('shadow-none')
    expect(within(menu).getAllByRole('link')).toHaveLength(4)

    const item = within(menu).getAllByRole('link')[1] as HTMLAnchorElement

    expect(item).toHaveAttribute('href', MENU[1]!.href)

    item.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(item)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })

  it('folds the panel away from its own row as well as from a destination', async () => {
    const user = userEvent.setup()
    const onNavigate = renderRow('panel')

    const row = screen.getByRole('link', { name: MENU_LABEL })

    row.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(row)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
