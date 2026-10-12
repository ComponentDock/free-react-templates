import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggler } from './Toggler'
import { PANEL_ID, TOGGLER_LABEL } from '../lib/site'

describe('Toggler — the narrow-width strip own button', () => {
  it('is a real button that points at the panel and reports its state', () => {
    const onToggle = vi.fn()

    render(<Toggler isOpen={false} onToggle={onToggle} />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('type', 'button')
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(toggler).toHaveAttribute('aria-controls', PANEL_ID)
    expect(toggler.className).toContain('lg:hidden')
    expect(toggler.className).toContain('text-toggler')
    expect(toggler.className).toContain('uppercase')
    expect(toggler.querySelector('svg')).not.toBeNull()
  })

  it('carries the panel state it opened and asks its owner to toggle', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    render(<Toggler isOpen onToggle={onToggle} />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggler)

    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
