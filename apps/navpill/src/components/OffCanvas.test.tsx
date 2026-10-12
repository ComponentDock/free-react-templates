import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MENU_ID } from '../lib/site'
import { OffCanvas } from './OffCanvas'

const noop = () => {}

describe('OffCanvas', () => {
  it('sits off-canvas, invisible and unnamed while it is shut', () => {
    render(<OffCanvas isOpen={false} onClose={noop} panelRef={createRef<HTMLElement>()} />)

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
    expect(veil).toHaveAttribute('aria-hidden', 'true')
    expect(veil).toHaveClass(
      'fixed',
      'inset-0',
      'z-[1999]',
      'bg-black/50',
      'transition-opacity',
      'invisible',
      'opacity-0',
    )
  })

  it('slides in over the veil, exposes its own scroll body and closes from its glyph', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const panelRef = createRef<HTMLElement>()
    const { rerender } = render(<OffCanvas isOpen={false} onClose={onClose} panelRef={panelRef} />)

    rerender(<OffCanvas isOpen onClose={onClose} panelRef={panelRef} />)

    const drawer = screen.getByRole('complementary', { name: 'Site menu' })

    expect(drawer).toHaveClass('translate-x-0', 'visible', 'w-[300px]', 'h-screen')
    expect(drawer).not.toHaveClass('invisible')
    expect(panelRef.current).toBe(drawer)

    const veil = screen.getByTestId('veil')
    expect(veil).toHaveClass('visible', 'opacity-100')
    expect(veil.className).not.toContain('opacity-0')

    const body = drawer.querySelector('div:nth-of-type(2)') as HTMLElement
    expect(body).toHaveClass('h-[calc(100vh-52px)]', 'overflow-y-auto', 'px-5', 'pb-[150px]')

    const glyph = within(drawer).getByRole('button', { name: 'Close the menu' })
    expect(glyph).toHaveClass('text-[30px]')

    await user.click(glyph)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('mirrors the desktop row from the same model at 20px, and folds its sub-rows', async () => {
    const user = userEvent.setup()

    render(<OffCanvas isOpen onClose={noop} panelRef={createRef<HTMLElement>()} />)

    const drawer = screen.getByRole('complementary', { name: 'Site menu' })
    const links = within(drawer).getAllByRole('link')

    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'Explore',
      'Showcase',
      'About',
      'Blog',
      'Contact',
    ])
    expect(links[0]).toHaveClass('text-accent', 'text-[20px]')
    expect(links[2]).toHaveClass('text-ink', 'text-[20px]')

    await user.click(within(drawer).getByRole('button', { name: 'Show Explore submenu' }))

    expect(within(drawer).getByRole('link', { name: 'Overview' })).toHaveClass(
      'pl-10',
      'text-[16px]',
    )
  })
})
