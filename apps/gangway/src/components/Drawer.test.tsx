import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DRAWER_CLOSE_ID, DRAWER_CLOSE_LABEL, DRAWER_ID, MENU_TOGGLE_ID, NAV, VEIL_ID } from '../lib/site'
import { Drawer } from './Drawer'

function renderDrawer(isOpen: boolean) {
  const onClose = vi.fn()
  const panelRef = createRef<HTMLDivElement>()
  const closeRef = createRef<HTMLButtonElement>()

  const view = render(
    <Drawer isOpen={isOpen} onClose={onClose} panelRef={panelRef} closeRef={closeRef} />,
  )

  return { onClose, panelRef, closeRef, ...view }
}

describe('Drawer — the off-canvas panel', () => {
  it('keeps the panel parked 110% off the right edge while it is closed, and mounts nothing inside it', () => {
    renderDrawer(false)

    const panel = screen.getByTestId('drawer-panel')
    const veil = screen.getByTestId('drawer-veil')

    expect(panel).toBeEmptyDOMElement()
    expect(panel.className).toContain('translate-x-[110%]')
    expect(panel.className).toContain('w-[300px]')
    expect(panel.className).toContain('h-screen')
    expect(panel.className).toContain('z-[2000]')
    expect(panel.className).toContain('shadow-drawer')
    expect(panel.className).toContain('ease-drawer')
    expect(veil.className).toContain('invisible')
    expect(veil.className).toContain('opacity-0')
    expect(screen.queryByTestId('drawer-nav')).toBeNull()
  })

  it('slides in over a 50% veil, with the same rows the wide bar carries', () => {
    const { panelRef, closeRef } = renderDrawer(true)

    const panel = screen.getByTestId('drawer-panel')
    const veil = screen.getByTestId('drawer-veil')

    expect(panel).toHaveAttribute('id', DRAWER_ID)
    expect(panel).toHaveAttribute('role', 'dialog')
    expect(panel).toHaveAttribute('aria-modal', 'true')
    expect(panel).toHaveAttribute('aria-labelledby', MENU_TOGGLE_ID)
    expect(panel.className).toContain('translate-x-0')
    expect(panel.className).not.toContain('translate-x-[110%]')
    expect(panelRef.current).toBe(panel)
    expect(closeRef.current).toBe(screen.getByRole('button', { name: DRAWER_CLOSE_LABEL }))

    expect(veil).toHaveAttribute('id', VEIL_ID)
    expect(veil).toHaveAttribute('aria-hidden', 'true')
    expect(veil.className).toContain('bg-overlay')
    expect(veil.className).toContain('z-[1002]')
    expect(veil.className).toContain('visible')
    expect(veil.className).toContain('opacity-100')

    const nav = within(panel).getByRole('navigation', { name: 'Site menu' })
    const rows = within(nav).getByTestId('drawer-nav')

    expect(rows.children).toHaveLength(8)
    expect(Array.from(rows.children).map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
  })

  it('carries a 30px close control on a strip above a scrolling body', () => {
    renderDrawer(true)

    const close = screen.getByRole('button', { name: DRAWER_CLOSE_LABEL })

    expect(close).toHaveAttribute('id', DRAWER_CLOSE_ID)
    expect(close).toHaveAttribute('type', 'button')
    expect(close.querySelector('svg')).toHaveAttribute('width', '30')
    expect(close.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(close.className).toContain('hover:text-close-hover')
    expect(close.className).toContain('mt-2')

    const body = screen.getByTestId('drawer-body')

    expect(body.className).toContain('overflow-y-scroll')
    expect(body.className).toContain('h-[calc(100vh-52px)]')
    expect(body.className).toContain('pb-[150px]')
    expect(body.className).toContain('px-5')
  })

  it('hands its own close control and its veil back to the bar', async () => {
    const user = userEvent.setup()

    const { onClose } = renderDrawer(true)

    await user.click(screen.getByRole('button', { name: DRAWER_CLOSE_LABEL }))
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(screen.getByTestId('drawer-veil'))
    expect(onClose).toHaveBeenCalledTimes(2)
  })

  it('folds itself away when a destination inside it is chosen', async () => {
    const user = userEvent.setup()

    const { onClose } = renderDrawer(true)

    const link = within(screen.getByTestId('drawer-nav')).getByRole('link', { name: 'Berth' })

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
