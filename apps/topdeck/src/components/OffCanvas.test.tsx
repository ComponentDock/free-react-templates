import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MENU_ID, NAV } from '../lib/site'
import { OffCanvas } from './OffCanvas'

const noop = () => {}

function renderPanel(isOpen: boolean, onClose: () => void = noop) {
  const panelRef = createRef<HTMLElement>()
  const closeRef = createRef<HTMLButtonElement>()
  const view = render(
    <OffCanvas isOpen={isOpen} onClose={onClose} panelRef={panelRef} closeRef={closeRef} />,
  )

  return { ...view, panelRef, closeRef }
}

describe('OffCanvas', () => {
  it('waits off-canvas to the RIGHT, invisible and out of reach while it is shut', () => {
    renderPanel(false)

    const panel = document.getElementById(MENU_ID) as HTMLElement

    expect(panel.tagName).toBe('ASIDE')
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
        'max-w-full',
        'bg-white',
        'pt-5',
        'shadow-panel',
        'transition-transform',
        'ease-in-out',
        'translate-x-[110%]',
        'invisible',
      ]),
    )
    expect(panel).not.toHaveClass('translate-x-0', 'left-0')
    expect(screen.queryByRole('complementary', { name: 'Site menu' })).toBeNull()

    const veil = screen.getByTestId('veil')

    expect(veil).toHaveAttribute('aria-label', 'Close the menu backdrop')
    expect(veil).toHaveAttribute('tabindex', '-1')
    expect(veil).toHaveClass('fixed', 'inset-0', 'z-[1002]', 'bg-black/50', 'invisible', 'opacity-0')
    expect(veil).toBe(panel.previousElementSibling)

    const body = screen.getByTestId('panel-body')

    expect(body).toHaveClass('h-[calc(100vh-52px)]', 'overflow-y-auto', 'px-5', 'pb-[150px]')
  })

  it('slides in over the veil, keeps a square 30px close glyph and closes from it', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const panelRef = createRef<HTMLElement>()
    const closeRef = createRef<HTMLButtonElement>()

    const { rerender } = render(
      <OffCanvas isOpen={false} onClose={onClose} panelRef={panelRef} closeRef={closeRef} />,
    )

    rerender(<OffCanvas isOpen onClose={onClose} panelRef={panelRef} closeRef={closeRef} />)

    const panel = screen.getByRole('complementary', { name: 'Site menu' })

    expect(panel).toHaveClass('translate-x-0', 'visible', 'right-0', 'w-[300px]', 'h-screen')
    expect(panel).not.toHaveClass('invisible', 'translate-x-[110%]')
    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(panelRef.current).toBe(panel)

    const veil = screen.getByTestId('veil')

    expect(veil).toHaveClass('visible', 'opacity-100')
    expect(veil).toHaveAttribute('tabindex', '0')

    const glyph = within(panel).getByRole('button', { name: 'Close the menu' })

    expect(glyph).toHaveClass('text-[30px]', 'pl-2.5', 'hover:text-close-hover')
    expect(glyph).not.toHaveClass('rounded-full', 'rounded-md', 'rounded-lg', 'rounded-sm')
    expect(glyph.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(closeRef.current).toBe(glyph)

    await user.click(glyph)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('hands the veil the same close intent', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    renderPanel(true, onClose)

    await user.click(screen.getByTestId('veil'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('carries the same seven rows the header nav is built from', () => {
    renderPanel(true)

    const panel = screen.getByRole('complementary', { name: 'Site menu' })
    const rows = Array.from(screen.getByTestId('panel-nav').children) as HTMLElement[]

    expect(rows.map((row) => row.querySelector('a, button')?.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(within(panel).getAllByRole('link').map((link) => link.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
  })
})
