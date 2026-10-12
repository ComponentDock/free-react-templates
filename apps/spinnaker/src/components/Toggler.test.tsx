import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggler } from './Toggler'
import { PANEL_ID, TOGGLER_LABEL } from '../lib/site'
import { togglerClass } from '../lib/styles'

describe('Toggler — the control the bar folds behind', () => {
  it('is a real button holding the design’s three-bar glyph and its own word', () => {
    render(<Toggler isOpen={false} onToggle={() => {}} />)

    const toggler = screen.getByTestId('toggler')

    expect(toggler.tagName).toBe('BUTTON')
    expect(toggler).toHaveAccessibleName(TOGGLER_LABEL)
    expect(toggler.className).toBe(togglerClass)
    expect(toggler.className).toContain('text-white/50')
    expect(toggler.className).toContain('uppercase')
    expect(toggler.className).toContain('lg:hidden')
    expect(toggler.querySelector('svg')).not.toBeNull()
  })

  it('carries the state of the panel it opens and points at it', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    const { rerender } = render(<Toggler isOpen={false} onToggle={onToggle} />)

    const toggler = screen.getByTestId('toggler')

    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(toggler).toHaveAttribute('aria-controls', PANEL_ID)

    await user.click(toggler)
    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<Toggler isOpen onToggle={onToggle} />)

    expect(screen.getByTestId('toggler')).toHaveAttribute('aria-expanded', 'true')
  })
})
