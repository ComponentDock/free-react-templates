import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggler } from './Toggler'
import { PANEL_ID, TOGGLER_ID, TOGGLER_LABEL } from '../lib/site'

describe('Toggler — the card’s own disclosure control', () => {
  it('is a real button naming its state and the panel it opens', () => {
    render(<Toggler isOpen={false} onToggle={vi.fn()} />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('id', TOGGLER_ID)
    expect(toggler).toHaveAttribute('type', 'button')
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(toggler).toHaveAttribute('aria-controls', PANEL_ID)
  })

  it('reports the open state it is handed, keeping a focus ring the design had removed', () => {
    render(<Toggler isOpen onToggle={vi.fn()} />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(toggler.className).toContain('lg:hidden')
    expect(toggler.className).toContain('text-toggler')
    expect(toggler.className).toContain('uppercase')
    expect(toggler.className).toContain('focus-visible:outline-white')
    expect(toggler.querySelector('svg')).not.toBeNull()
  })

  it('hands every activation to its owner', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    render(<Toggler isOpen={false} onToggle={onToggle} />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
