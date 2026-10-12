import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggler } from './Toggler'
import { PANEL_ID, TOGGLER_ID, TOGGLER_LABEL } from '../lib/site'
import { togglerClass } from '../lib/styles'

describe('Toggler — the bars button at the bar’s own left', () => {
  it('is a real button carrying the state of the panel it opens', () => {
    render(<Toggler isOpen={false} onToggle={() => {}} />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler).toHaveAttribute('id', TOGGLER_ID)
    expect(toggler).toHaveAttribute('type', 'button')
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(toggler).toHaveAttribute('aria-controls', PANEL_ID)
    expect(toggler.querySelector('svg')).not.toBeNull()
  })

  it('reports the open state it is handed', () => {
    render(<Toggler isOpen onToggle={() => {}} />)

    expect(screen.getByRole('button', { name: TOGGLER_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('hands its own press to the surface that owns the panel', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    render(<Toggler isOpen={false} onToggle={onToggle} />)

    await user.click(screen.getByRole('button', { name: TOGGLER_LABEL }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('keeps the design’s own 16px tracked-out uppercase word and its padding on the dark bar', () => {
    render(<Toggler isOpen={false} onToggle={() => {}} />)

    const toggler = screen.getByRole('button', { name: TOGGLER_LABEL })

    expect(toggler.className).toBe(togglerClass)
    expect(toggler.className).toContain('text-[16px]')
    expect(toggler.className).toContain('tracking-[0.1em]')
    expect(toggler.className).toContain('uppercase')
    expect(toggler.className).toContain('text-white/50')
    expect(toggler.className).toContain('lg:hidden')
    expect(toggler.className).toContain('border-0')
    expect(toggler.className).toContain('pl-3')
    expect(toggler.className).toContain('pr-0')
    expect(togglerClass).toContain('focus-visible:outline-accent')
  })
})
