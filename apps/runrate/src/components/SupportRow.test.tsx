import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SupportRow } from './SupportRow'

describe('SupportRow', () => {
  it('is one label wrapping its own checkbox', () => {
    const { container } = render(<SupportRow checked={false} onToggle={() => {}} />)

    const row = container.querySelector('label.rr-check')
    const box = screen.getByRole('checkbox', { name: /Priority support/ })
    expect(row).toContainElement(box)
    expect(box).toHaveAttribute('id', 'runrate-support')
    expect(box).not.toBeChecked()
  })

  it('carries the checked state on the row, not only in the box', () => {
    const { container, rerender } = render(<SupportRow checked={false} onToggle={() => {}} />)
    expect(container.querySelector('.rr-check')).toHaveAttribute('data-checked', 'false')

    rerender(<SupportRow checked onToggle={() => {}} />)
    expect(container.querySelector('.rr-check')).toHaveAttribute('data-checked', 'true')
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('toggles from the box and from the row text alike', async () => {
    const onToggle = vi.fn()
    const { rerender } = render(<SupportRow checked={false} onToggle={onToggle} />)

    await userEvent.click(screen.getByRole('checkbox'))
    expect(onToggle).toHaveBeenCalledWith(true)

    rerender(<SupportRow checked={false} onToggle={onToggle} />)
    await userEvent.click(screen.getByText(/one-hour replies/))
    expect(onToggle).toHaveBeenCalledWith(true)
  })

  it('names the price in its text so the row never needs the total', () => {
    const { container } = render(<SupportRow checked={false} onToggle={() => {}} />)

    expect(container.querySelector('strong')).toHaveTextContent('Priority support')
    expect(container.querySelector('.rr-check-text')).toHaveTextContent('$149 / month')
  })
})
