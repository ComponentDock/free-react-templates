import { render, screen } from '@testing-library/react'
import { MENU_ID, MENU_LABEL, MENU_TOGGLE_ID } from '../lib/site'
import { MenuToggle } from './MenuToggle'

describe('MenuToggle', () => {
  it('is a labelled 56x40 hamburger that reports the list’s state and names what it drives', () => {
    const onToggle = vi.fn()
    const toggleRef = { current: null }

    const { rerender } = render(
      <MenuToggle isOpen={false} onToggle={onToggle} toggleRef={toggleRef} />,
    )

    const toggle = screen.getByRole('button', { name: MENU_LABEL })

    expect(toggle).toHaveAttribute('id', MENU_TOGGLE_ID)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', MENU_ID)
    expect(toggle).toHaveClass(
      'h-10',
      'w-14',
      'rounded-flyout',
      'border-white/10',
      'text-[20px]',
      'text-white/50',
      'md:hidden',
    )
    expect(toggle.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')

    toggle.click()

    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<MenuToggle isOpen onToggle={onToggle} toggleRef={toggleRef} />)

    expect(screen.getByRole('button', { name: MENU_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
