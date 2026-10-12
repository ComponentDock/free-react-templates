import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MENU_ID, NAV } from '../lib/site'
import { OffCanvas } from './OffCanvas'

function renderPanel(isOpen: boolean) {
  const onClose = vi.fn()
  const panelRef = createRef<HTMLElement>()
  const view = render(<OffCanvas isOpen={isOpen} onClose={onClose} panelRef={panelRef} />)

  return { onClose, panelRef, panel: panelRef.current as HTMLElement, ...view }
}

describe('OffCanvas', () => {
  it('ships parked off the right edge over a transparent veil', () => {
    const { panel } = renderPanel(false)

    expect(panel).toHaveAttribute('id', MENU_ID)
    expect(panel).toHaveAttribute('aria-label', 'Site menu')
    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel.className.split(' ')).toEqual(
      expect.arrayContaining([
        'fixed',
        'top-0',
        'right-0',
        'z-[2000]',
        'h-screen',
        'w-[300px]',
        'bg-white',
        'pt-5',
        'shadow-panel',
        'transition-transform',
        'duration-300',
        'ease-in-out',
        'translate-x-[110%]',
        'invisible',
      ]),
    )

    expect(screen.getByTestId('veil')).toHaveClass('bg-black/50', 'invisible', 'opacity-0')
  })

  it('slides in over a 50% veil when it is open', () => {
    const { panel, panelRef } = renderPanel(true)

    expect(panelRef.current).toBe(panel)
    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(panel.className.split(' ')).toEqual(expect.arrayContaining(['translate-x-0', 'visible']))
    expect(panel.className).not.toContain('translate-x-[110%]')

    const veil = screen.getByTestId('veil')

    expect(veil).toHaveAttribute('aria-hidden', 'true')
    expect(veil).toHaveClass('fixed', 'inset-0', 'z-[1999]', 'bg-black/50', 'opacity-100')
  })

  it('hands the close glyph a real button with an accessible name', async () => {
    const user = userEvent.setup()
    const { onClose, panel } = renderPanel(true)

    const close = within(panel).getByRole('button', { name: 'Close the menu' })

    expect(close).toHaveClass('text-[30px]', 'hover:text-muted')
    expect(close.querySelector('svg')).not.toBeNull()

    await user.click(close)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('scrolls its own body below the 52px header strip and mirrors the row', () => {
    const { panel } = renderPanel(true)

    const body = panel.lastElementChild as HTMLElement

    expect(body).toHaveClass('h-[calc(100vh-52px)]', 'overflow-y-auto', 'px-5', 'pb-[150px]')

    const list = body.querySelector('ul') as HTMLElement

    expect(Array.from(list.children)).toHaveLength(NAV.length)
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
