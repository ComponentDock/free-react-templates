import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'

/**
 * jsdom does not apply Tailwind's visibility utilities, so the shut drawer is
 * asserted through its classes and `aria-hidden`; its rows only answer to role
 * queries once it is open.
 */
describe('MobileMenu', () => {
  it('sits off-canvas, invisible and unnamed while it is shut', () => {
    render(<MobileMenu open={false} onClose={() => {}} />)

    const panel = document.getElementById('mobile-menu') as HTMLElement

    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel).toHaveClass('invisible', 'pointer-events-none', 'lg:hidden', 'z-[2000]')
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
  })

  it('is a 300px white drawer that takes focus and can be dismissed by pointer and keyboard', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const { rerender } = render(<MobileMenu open={false} onClose={onClose} />)

    rerender(<MobileMenu open onClose={onClose} />)

    const drawer = screen.getByRole('dialog', { name: 'Site menu' })
    const panel = document.getElementById('mobile-menu') as HTMLElement

    expect(drawer).toHaveClass(
      'w-[300px]',
      'h-screen',
      'bg-white',
      'pt-5',
      'shadow-panel',
      'translate-x-0',
      'ease-in-out',
    )
    expect(panel).not.toHaveClass('invisible')

    const glyph = within(drawer).getByRole('button', { name: 'Close the menu' })
    expect(document.activeElement).toBe(glyph)

    await user.click(glyph)
    expect(onClose).toHaveBeenCalledTimes(1)

    const veil = screen.getByTestId('menu-veil')
    expect(veil.tagName).toBe('BUTTON')
    expect(veil).toHaveAttribute('aria-label', 'Close the menu')
    expect(veil).toHaveClass('bg-black/50', 'transition-opacity', 'opacity-100')

    veil.focus()
    await user.keyboard('{Enter}')
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.keyboard('a')
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('mounts the same six rows at 20px with the current one already coral', () => {
    render(<MobileMenu open onClose={() => {}} />)

    const drawer = screen.getByRole('dialog', { name: 'Site menu' })
    const links = within(drawer).getAllByRole('link')

    expect(links.map((link) => link.textContent)).toEqual([
      'Home',
      'Portfolio',
      'About',
      'Services',
      'Blog',
      'Contact',
    ])

    for (const link of links) {
      expect(link).toHaveClass('px-5', 'py-[10px]', 'text-[20px]')
    }

    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[0]).toHaveClass('text-band')
    expect(links[1]).not.toHaveAttribute('aria-current')
    expect(links[1]).toHaveClass('text-ink')

    expect(drawer.querySelectorAll('ul ul')).toHaveLength(0)
    expect(drawer.querySelectorAll('[aria-expanded]')).toHaveLength(0)
    expect(drawer.querySelectorAll('span, [class*="icomoon"]')).toHaveLength(0)
    expect(drawer.querySelector('.h-\\[calc\\(100vh-52px\\)\\]')).toHaveClass('pb-[150px]', 'overflow-y-auto')
  })
})
