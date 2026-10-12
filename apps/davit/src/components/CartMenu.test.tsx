import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartMenu } from './CartMenu'
import {
  CART_LABEL,
  CART_MENU,
  CART_MENU_ID,
  CART_MENU_PANEL_ID,
  CART_TRIGGER_ID,
  CART_TRIGGER_PANEL_ID,
  menuDestinations,
} from '../lib/site'

/**
 * A click is driven as a bare click event, because hovering the link is its own opening path —
 * exactly as the design's own script binds them, where a pointer that comes to rest on the
 * item has already opened the list before the click toggles it.
 */
function clickTrigger() {
  fireEvent.click(screen.getByRole('button', { name: CART_LABEL }))
}

const trigger = () => screen.getByRole('button', { name: CART_LABEL })
const items = () => screen.getAllByRole('link')

describe('CartMenu — the circled cart link and the list it opens', () => {
  it('is a real button naming its state and the list it opens, with nothing mounted behind it', () => {
    render(<CartMenu variant="desktop" onNavigate={vi.fn()} />)

    const link = trigger()

    expect(link).toHaveAttribute('id', CART_TRIGGER_ID)
    expect(link).toHaveAttribute('type', 'button')
    expect(link).toHaveAttribute('aria-haspopup', 'true')
    expect(link).toHaveAttribute('aria-expanded', 'false')
    expect(link).toHaveAttribute('aria-controls', CART_MENU_ID)
    expect(link.className).toContain('size-10')
    expect(link.className).toContain('rounded-full')
    expect(link.className).toContain('border-accent')
    expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('opens a white rounded list of five real items, right-aligned under the circle', () => {
    render(<CartMenu variant="desktop" onNavigate={vi.fn()} />)

    clickTrigger()

    const list = screen.getByTestId(CART_MENU_ID)

    expect(trigger()).toHaveAttribute('aria-expanded', 'true')
    expect(list.tagName).toBe('UL')
    expect(list.className).toContain('absolute')
    expect(list.className).toContain('top-full')
    expect(list.className).toContain('right-0')
    expect(list.className).toContain('rounded-menu')
    expect(list.className).toContain('shadow-menu')
    expect(list.className).toContain('bg-white')
    expect(list.className).not.toContain('border')

    const bills = items()

    expect(bills.map((item) => item.getAttribute('href'))).toEqual(menuDestinations())
    expect(bills.map((item) => item.textContent)).toEqual(CART_MENU.map((item) => item.label))

    for (const item of bills) {
      expect(item.className).toContain('text-[12px]')
      expect(item.className).toContain('px-6')
      expect(item.className).toContain('hover:bg-accent')
      expect(item.className).toContain('hover:text-white')
    }

    expect(screen.getAllByRole('separator')).toHaveLength(2)
  })

  it('shuts on a second activation and on a press anywhere outside the item', () => {
    render(<CartMenu variant="desktop" onNavigate={vi.fn()} />)

    clickTrigger()
    clickTrigger()

    expect(screen.queryByRole('link')).toBeNull()

    clickTrigger()
    fireEvent.pointerDown(document.body)

    expect(screen.queryByRole('link')).toBeNull()
    expect(trigger()).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens on a hover and shuts when the pointer leaves the item', () => {
    render(<CartMenu variant="desktop" onNavigate={vi.fn()} />)

    const item = trigger().closest('li') as HTMLElement

    fireEvent.mouseEnter(item)

    expect(screen.getByTestId(CART_MENU_ID)).toBeInTheDocument()

    fireEvent.mouseLeave(item)

    expect(screen.queryByTestId(CART_MENU_ID)).toBeNull()
  })

  it('shuts on a chosen destination, and reports it to the surface that owns the link', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(<CartMenu variant="desktop" onNavigate={onNavigate} />)

    clickTrigger()

    const first = screen.getAllByRole('link')[0] as HTMLAnchorElement

    first.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(first)

    expect(onNavigate).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('link')).toBeNull()
  })

  it('walks the five items from a keyboard, and hands focus back on Escape', async () => {
    const user = userEvent.setup()

    render(<CartMenu variant="desktop" onNavigate={vi.fn()} />)

    trigger().focus()
    await user.keyboard('a')

    expect(screen.queryByTestId(CART_MENU_ID)).toBeNull()

    await user.keyboard('{ArrowDown}')

    expect(screen.getByTestId(CART_MENU_ID)).toBeInTheDocument()
    expect(document.activeElement).toBe(items()[0])

    await user.keyboard('{ArrowDown}')

    expect(document.activeElement).toBe(items()[1])

    await user.keyboard('{ArrowUp}')

    expect(document.activeElement).toBe(items()[0])

    // The design's script walks one step at a time and stops at either end of the list.
    await user.keyboard('{ArrowUp}')

    expect(document.activeElement).toBe(items()[0])

    for (let step = 0; step < 5; step += 1) {
      await user.keyboard('{ArrowDown}')
    }

    expect(document.activeElement).toBe(items()[4])

    await user.keyboard('a')

    expect(document.activeElement).toBe(items()[4])

    await user.keyboard('{Escape}')

    expect(screen.queryByTestId(CART_MENU_ID)).toBeNull()
    expect(document.activeElement).toBe(trigger())
  })

  it('carries its own ids inside the panel, so both presentations can be mounted at once', () => {
    render(
      <>
        <CartMenu variant="desktop" onNavigate={vi.fn()} />
        <CartMenu variant="panel" onNavigate={vi.fn()} />
      </>,
    )

    expect(screen.getAllByRole('button', { name: CART_LABEL })).toHaveLength(2)

    fireEvent.click(document.getElementById(CART_TRIGGER_PANEL_ID) as HTMLElement)

    expect(document.getElementById(CART_MENU_PANEL_ID)).not.toBeNull()
    expect(document.getElementById(CART_MENU_ID)).toBeNull()
    expect(document.getElementById(CART_TRIGGER_PANEL_ID)).toHaveAttribute(
      'aria-controls',
      CART_MENU_PANEL_ID,
    )

    fireEvent.click(document.getElementById(CART_TRIGGER_ID) as HTMLElement)

    expect(document.getElementById(CART_MENU_ID)).not.toBeNull()
    expect(document.getElementById(CART_MENU_PANEL_ID)).not.toBeNull()
  })
})
