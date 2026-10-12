import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DRAWER_ID, MENU_LABEL, MENU_TOGGLE_ID } from '../lib/site'
import { MenuToggle } from './MenuToggle'

function renderToggle(isOpen = false) {
  const onToggle = vi.fn()
  const toggleRef = createRef<HTMLButtonElement>()

  const view = render(
    <MenuToggle isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />,
  )

  return { onToggle, toggleRef, ...view }
}

describe('MenuToggle — the hamburger below 1200px', () => {
  it('is a real button carrying the panel’s state and an accessible name', () => {
    renderToggle()

    const button = screen.getByRole('button', { name: MENU_LABEL })

    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('id', MENU_TOGGLE_ID)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAttribute('aria-controls', DRAWER_ID)
    expect(button.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('measures 28 by 42, 8px down and 16px in, and reports an open drawer', () => {
    renderToggle(true)

    const button = screen.getByRole('button', { name: MENU_LABEL })

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button.className).toContain('h-[42px]')
    expect(button.className).toContain('w-7')
    expect(button.className).toContain('mt-2')
    expect(button.className).toContain('ml-4')
    expect(button.className).toContain('text-white')
    expect(button.className).toContain('xl:hidden')
  })

  it('hands its activation back to the bar', async () => {
    const user = userEvent.setup()

    const { onToggle, toggleRef } = renderToggle()

    expect(toggleRef.current).toBe(screen.getByRole('button', { name: MENU_LABEL }))

    await user.click(screen.getByRole('button', { name: MENU_LABEL }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
