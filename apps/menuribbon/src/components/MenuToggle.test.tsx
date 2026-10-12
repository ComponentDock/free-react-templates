import { createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MENU_ID } from '../lib/site'
import { MenuToggle } from './MenuToggle'

describe('MenuToggle', () => {
  it('is an icon-only button that reports the panel state', () => {
    const onToggle = vi.fn()
    const toggleRef = createRef<HTMLButtonElement>()

    const { rerender } = render(
      <MenuToggle isOpen={false} onToggle={onToggle} toggleRef={toggleRef} />,
    )

    const button = screen.getByRole('button', { name: 'Toggle the site menu' })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', MENU_ID)
    expect(button).toHaveClass('text-black', 'hover:text-accent')
    expect(button.querySelector('svg')).not.toBeNull()
    expect(toggleRef.current).toBe(button)

    fireEvent.click(button)
    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<MenuToggle isOpen onToggle={onToggle} toggleRef={toggleRef} />)
    expect(screen.getByRole('button', { name: 'Toggle the site menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
