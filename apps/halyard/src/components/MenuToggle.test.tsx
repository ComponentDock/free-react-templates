import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DRAWER_ID, MENU_LABEL } from '../lib/site'
import { MenuToggle } from './MenuToggle'

const renderToggle = (isOpen = false) => {
  const onToggle = vi.fn()

  const view = render(
    <MenuToggle isOpen={isOpen} onToggle={onToggle} toggleRef={{ current: null }} />,
  )

  return { onToggle, toggle: screen.getByRole('button', { name: MENU_LABEL }), ...view }
}

describe('MenuToggle — the hamburger the design ships as an anchor', () => {
  it('is a real button with an accessible name, not an href="#" anchor', () => {
    const { container, toggle } = renderToggle()

    expect(toggle.tagName).toBe('BUTTON')
    expect(toggle).toHaveAttribute('type', 'button')
    expect(toggle).toHaveAttribute('aria-label', MENU_LABEL)
    expect(container.querySelector('a')).toBeNull()
  })

  it('reports the drawer’s state and which panel it opens', () => {
    const { toggle, unmount } = renderToggle()

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', DRAWER_ID)

    unmount()

    expect(renderToggle(true).toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('calls back on every press', async () => {
    const user = userEvent.setup()
    const { onToggle, toggle } = renderToggle()

    await user.click(toggle)

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('draws a 28px three-bar mark inside a 28px-wide control', () => {
    const { toggle } = renderToggle()
    const icon = toggle.querySelector('svg') as SVGElement

    expect(icon).toHaveAttribute('width', '28')
    expect(icon).toHaveAttribute('height', '28')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(toggle.className).toContain('w-7')
    expect(toggle.className).toContain('h-[65.59px]')
  })
})
