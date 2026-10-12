import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DRAWER_CLOSE_LABEL,
  DRAWER_CLOSE_ID,
  DRAWER_ID,
  DRAWER_NAV_ID,
  MENU_TOGGLE_ID,
  VEIL_ID,
  navAll,
} from '../lib/site'
import { Drawer } from './Drawer'

const renderDrawer = (isOpen: boolean) => {
  const onClose = vi.fn()

  render(
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      panelRef={{ current: null }}
      closeRef={{ current: null }}
    />,
  )

  return { onClose }
}

describe('Drawer — the off-canvas panel and its veil', () => {
  it('stays parked off the right edge, with nothing focusable inside it, until it opens', () => {
    renderDrawer(false)

    const panel = screen.getByTestId('drawer-panel')

    expect(panel).toHaveClass('fixed')
    expect(panel).toHaveClass('right-0')
    expect(panel).toHaveClass('w-[300px]')
    expect(panel).toHaveClass('h-screen')
    expect(panel).toHaveClass('bg-white')
    expect(panel).toHaveClass('pt-5')
    expect(panel).toHaveClass('z-[2000]')
    expect(panel).toHaveClass('translate-x-[110%]')
    expect(screen.queryByTestId('drawer-nav')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('slides flush and lists all six rows in document order when it opens', () => {
    renderDrawer(true)

    const panel = screen.getByTestId('drawer-panel')

    expect(panel).toHaveClass('translate-x-0')
    expect(panel.className).toContain('transition-transform')
    expect(panel.className).toContain('duration-300')
    expect(panel.className).toContain('ease-drawer')

    const list = screen.getByTestId(DRAWER_NAV_ID)

    expect(list).toHaveAttribute('id', DRAWER_NAV_ID)
    expect(list.children).toHaveLength(6)
    expect(Array.from(list.querySelectorAll('a')).map((row) => row.textContent)).toEqual(
      navAll().map((row) => row.label),
    )
  })

  it('is a labelled dialog over a 50% veil that sits below the bar', () => {
    renderDrawer(true)

    const panel = screen.getByTestId('drawer-panel')
    const veil = screen.getByTestId('drawer-veil')

    expect(panel).toHaveAttribute('role', 'dialog')
    expect(panel).toHaveAttribute('aria-modal', 'true')
    expect(panel).toHaveAttribute('aria-labelledby', MENU_TOGGLE_ID)

    expect(veil).toHaveAttribute('id', VEIL_ID)
    expect(veil).toHaveAttribute('aria-hidden', 'true')
    expect(veil).toHaveClass('fixed')
    expect(veil).toHaveClass('inset-0')
    expect(veil).toHaveClass('bg-overlay')
    expect(veil).toHaveClass('opacity-100')

    // The bar carries z-1999 and the veil z-1002, so the wordmark stays legible.
    expect(Number(String(panel.className).match(/z-\[(\d+)\]/)?.[1])).toBeGreaterThan(1999)
    expect(Number(String(veil.className).match(/z-\[(\d+)\]/)?.[1])).toBe(1002)
  })

  it('closes on the veil and on the drawer’s own 30px control', async () => {
    const user = userEvent.setup()
    const { onClose } = renderDrawer(true)

    const close = screen.getByRole('button', { name: DRAWER_CLOSE_LABEL })

    expect(close).toHaveAttribute('id', DRAWER_CLOSE_ID)
    expect(close.className).toContain('mt-2')
    expect(close.querySelector('svg')).toHaveAttribute('width', '30')
    expect(close.className).toContain('hover:text-close-hover')

    await user.click(close)

    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(screen.getByTestId('drawer-veil'))

    expect(onClose).toHaveBeenCalledTimes(2)
  })

  it('folds away when a destination inside it is chosen', async () => {
    const user = userEvent.setup()
    const { onClose } = renderDrawer(true)

    await user.click(within(screen.getByTestId(DRAWER_NAV_ID)).getByRole('link', { name: 'Crew' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('hangs its strip and its scrolling body off the panel itself', () => {
    renderDrawer(true)

    const panel = screen.getByTestId('drawer-panel')
    const body = screen.getByTestId('drawer-body')

    expect(body.className).toContain('h-[calc(100vh-52px)]')
    expect(body.className).toContain('overflow-y-scroll')
    expect(body.className).toContain('pb-[150px]')
    expect(within(panel).getByRole('button', { name: DRAWER_CLOSE_LABEL }).closest('div')).toBe(
      panel.firstElementChild,
    )
    expect(panel).toHaveAttribute('id', DRAWER_ID)
    expect(document.querySelectorAll('[role="dialog"]')).toHaveLength(1)
  })
})
