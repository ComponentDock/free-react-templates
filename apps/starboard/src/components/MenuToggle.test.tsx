import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MENU_ID } from '../lib/site'
import { MenuToggle } from './MenuToggle'

describe('MenuToggle', () => {
  it('is an icon-only control that reports its expanded state against the panel id', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    const toggleRef = createRef<HTMLButtonElement>()
    const { rerender } = render(
      <MenuToggle isOpen={false} onToggle={onToggle} toggleRef={toggleRef} />,
    )

    const toggle = screen.getByRole('button', { name: 'Toggle the site menu' })

    expect(toggle.textContent).toBe('')
    expect(toggle.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(toggle.querySelector('svg')).toHaveAttribute('width', '28')
    expect(toggle).toHaveClass('text-white')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', MENU_ID)
    expect(toggleRef.current).toBe(toggle)

    await user.click(toggle)
    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<MenuToggle isOpen onToggle={onToggle} toggleRef={toggleRef} />)
    expect(screen.getByRole('button', { name: 'Toggle the site menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
