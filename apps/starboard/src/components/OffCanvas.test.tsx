import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MENU_ID, NAV } from '../lib/site'
import { OffCanvas } from './OffCanvas'

const noop = () => {}

function renderPanel(isOpen: boolean, onClose: () => void = noop) {
  return render(
    <OffCanvas
      isOpen={isOpen}
      onClose={onClose}
      panelRef={createRef<HTMLElement>()}
      closeRef={createRef<HTMLButtonElement>()}
    />,
  )
}

describe('OffCanvas', () => {
  it('sits off-canvas, invisible and unnamed while it is shut', () => {
    renderPanel(false)

    const panel = document.getElementById(MENU_ID) as HTMLElement

    expect(panel.tagName).toBe('ASIDE')
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
        'ease-in-out',
        'translate-x-[110%]',
        'invisible',
      ]),
    )
    expect(screen.queryByRole('complementary', { name: 'Site menu' })).toBeNull()

    const veil = screen.getByTestId('veil')
    expect(veil).toHaveAttribute('aria-label', 'Close the menu backdrop')
    expect(veil).toHaveAttribute('tabindex', '-1')
    expect(veil).toHaveClass('fixed', 'inset-0', 'bg-black/50', 'transition-opacity', 'invisible', 'opacity-0')
  })

  it('slides in over the veil, exposes its own scroll body and closes from its glyph', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const panelRef = createRef<HTMLElement>()
    const closeRef = createRef<HTMLButtonElement>()
    const { rerender } = render(
      <OffCanvas isOpen={false} onClose={onClose} panelRef={panelRef} closeRef={closeRef} />,
    )

    rerender(<OffCanvas isOpen onClose={onClose} panelRef={panelRef} closeRef={closeRef} />)

    const drawer = screen.getByRole('complementary', { name: 'Site menu' })

    expect(drawer).toHaveClass('translate-x-0', 'visible', 'w-[300px]', 'h-screen')
    expect(drawer).not.toHaveClass('invisible')
    expect(drawer).toHaveAttribute('aria-hidden', 'false')
    expect(panelRef.current).toBe(drawer)

    const veil = screen.getByTestId('veil')
    expect(veil).toHaveClass('visible', 'opacity-100')
    expect(veil).toHaveAttribute('tabindex', '0')
    expect(veil.className).not.toContain('opacity-0')

    const body = screen.getByTestId('panel-body')
    expect(body).toHaveClass('h-[calc(100vh-52px)]', 'overflow-y-auto', 'px-5', 'pb-[150px]')

    const glyph = within(drawer).getByRole('button', { name: 'Close the menu' })
    expect(glyph).toHaveClass('text-[30px]', 'rounded-none')
    expect(closeRef.current).toBe(glyph)
    expect(glyph).not.toHaveClass('rounded-full', 'rounded-lg', 'rounded-md', 'rounded-sm')

    await user.click(glyph)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('opens the veil button and hands it the same close intent', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    renderPanel(true, onClose)

    await user.click(screen.getByTestId('veil'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('mirrors the five rows from the same model at 20px, flat and with a blue current row', () => {
    renderPanel(true)

    const drawer = screen.getByRole('complementary', { name: 'Site menu' })
    const links = within(drawer).getAllByRole('link')

    expect(links.map((link) => link.textContent)).toEqual(NAV.map((item) => item.label))
    expect(links[0]).toHaveClass('text-brand', 'text-[20px]', 'py-[10px]', 'px-5')
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[1]).toHaveClass('text-ink', 'text-[20px]')
    expect(links[1]).not.toHaveAttribute('aria-current')

    // A flat list: no expanders, no sub-levels, no socials anywhere in the panel.
    expect(within(drawer).queryByRole('button', { name: /submenu/ })).toBeNull()
    expect(within(drawer).getAllByRole('listitem')).toHaveLength(5)
  })

  it('closes the sidebar when one of its rows is activated', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    renderPanel(true, onClose)

    const link = screen.getByRole('link', { name: 'Services' })

    // Neutralise jsdom hash navigation before React's delegated handler runs.
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
