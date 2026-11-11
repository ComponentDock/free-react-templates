import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { BillingSwitch } from './BillingSwitch'
import { SAVE_LABEL, STATUS_ANNUAL, STATUS_MONTHLY } from '../content'

describe('BillingSwitch', () => {
  it('names the toggle after its state and starts unpressed', () => {
    render(<BillingSwitch annual={false} onToggle={vi.fn()} status="" />)

    const toggle = screen.getByRole('button', { name: 'Annual billing' })
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(toggle).toHaveAttribute('type', 'button')
  })

  it('reports the annual state through aria-pressed', () => {
    render(<BillingSwitch annual onToggle={vi.fn()} status={STATUS_ANNUAL} />)

    expect(screen.getByRole('button', { name: 'Annual billing' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('keeps both visible period labels out of the accessibility tree', () => {
    const { container } = render(<BillingSwitch annual={false} onToggle={vi.fn()} status="" />)

    const sides = [...container.querySelectorAll('.tb-side')]
    expect(sides).toHaveLength(2)
    for (const side of sides) expect(side).toHaveAttribute('aria-hidden', 'true')
    expect(container.textContent).toContain('Monthly')
    expect(container.textContent).toContain('Annually')
    expect(container.textContent).toContain(SAVE_LABEL)
    expect(screen.queryByRole('heading', { name: /monthly/i })).not.toBeInTheDocument()
  })

  it('marks the active period and leaves the other muted', () => {
    const { container, rerender } = render(
      <BillingSwitch annual={false} onToggle={vi.fn()} status="" />,
    )

    expect(container.querySelectorAll('.tb-side--on')).toHaveLength(1)
    expect(container.querySelectorAll('.tb-side')[0]).toHaveClass('tb-side--on')

    rerender(<BillingSwitch annual onToggle={vi.fn()} status={STATUS_ANNUAL} />)

    expect(container.querySelectorAll('.tb-side')[0]).not.toHaveClass('tb-side--on')
    expect(container.querySelectorAll('.tb-side')[1]).toHaveClass('tb-side--on')
  })

  it('calls back on click', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<BillingSwitch annual={false} onToggle={onToggle} status="" />)

    await user.click(screen.getByRole('button', { name: 'Annual billing' }))

    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('keeps the live region empty until the first switch', () => {
    const { rerender } = render(<BillingSwitch annual={false} onToggle={vi.fn()} status="" />)

    const status = screen.getByRole('status')
    expect(status).toHaveAttribute('aria-live', 'polite')
    expect(status.textContent).toBe('')

    rerender(<BillingSwitch annual onToggle={vi.fn()} status={STATUS_ANNUAL} />)

    expect(screen.getByRole('status')).toHaveTextContent(STATUS_ANNUAL)
    expect(screen.getByRole('status')).toHaveTextContent('billed yearly')
    expect(STATUS_MONTHLY).toBe('Monthly billing.')
  })
})
