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
    const drawer = screen.queryByRole('dialog', { name: 'Site menu' })

    expect(panel).toHaveAttribute('aria-hidden', 'true')
    expect(panel).toHaveClass('invisible', 'pointer-events-none', 'xl:hidden')
    expect(drawer).toBeNull()
  })

  it('is a 300px white drawer that takes focus and can be dismissed four ways', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const { rerender } = render(<MobileMenu open={false} onClose={onClose} />)

    rerender(<MobileMenu open onClose={onClose} />)

    const drawer = screen.getByRole('dialog', { name: 'Site menu' })
    const panel = document.getElementById('mobile-menu') as HTMLElement

    expect(drawer).toHaveClass(
      'w-[300px]',
      'bg-white',
      'pt-5',
      'shadow-panel',
      'translate-x-0',
      'ease-in-out',
    )
    expect(panel).not.toHaveClass('invisible')
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close the menu' }))

    await user.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(screen.getByTestId('menu-veil'))
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.keyboard('a')
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('mounts the same tree at 20/16/16px behind round, wired toggles', async () => {
    const user = userEvent.setup()
    render(<MobileMenu open onClose={() => {}} />)

    const drawer = screen.getByRole('dialog', { name: 'Site menu' })

    const home = within(drawer).getByRole('link', { name: 'Home' })
    expect(home).toHaveClass('pl-5', 'text-[20px]', 'py-[10px]', 'text-ink')
    expect(within(drawer).getAllByRole('link', { name: /opens in a new tab/ })).toHaveLength(3)

    expect(document.getElementById('mobile-about')).toBeNull()

    const aboutToggle = within(drawer).getByRole('button', { name: 'Show the About rows' })
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'false')
    expect(aboutToggle).toHaveAttribute('aria-controls', 'mobile-about')
    expect(aboutToggle).toHaveClass('h-9', 'w-9', 'rounded-full', 'hover:bg-toggle-hover')

    await user.click(aboutToggle)

    expect(aboutToggle).toHaveAttribute('aria-expanded', 'true')
    expect(aboutToggle).toHaveClass('rotate-180')
    expect(within(drawer).getByRole('button', { name: 'Hide the About rows' })).toBe(aboutToggle)

    const team = within(drawer).getByRole('link', { name: 'Team' })
    expect(team).toHaveClass('pl-10', 'text-[16px]')

    const moreToggle = within(drawer).getByRole('button', { name: 'Show the More rows' })
    await user.click(moreToggle)

    const flyout = document.getElementById('mobile-more') as HTMLElement
    expect(flyout.querySelector('a')).toHaveClass('pl-[60px]', 'text-[16px]')
    expect(within(flyout).getByRole('link', { name: 'Plan compare' })).toHaveAttribute(
      'href',
      '#pricing',
    )

    await user.click(within(drawer).getByRole('button', { name: 'Hide the More rows' }))
    expect(document.getElementById('mobile-more')).toBeNull()
  })
})
