import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MESSAGES } from '../data'
import { Toast } from './Toast'

describe('Toast', () => {
  it('is a permanent status line, 1 px tall while silent', () => {
    render(<Toast message="" canUndo={false} onUndo={() => {}} />)

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('')
    expect(status.getAttribute('class')).toContain('min-h-px')
    expect(status.getAttribute('class')).toContain('mt-3.5')
    expect(status.getAttribute('class')).not.toContain('bg-toast')
    expect(screen.queryByRole('button', { name: 'Undo' })).toBeNull()
  })

  it('gives a message the plate, the padding and the radius', () => {
    render(<Toast message={MESSAGES.allRead} canUndo={false} onUndo={() => {}} />)

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('All notifications marked as read.')
    expect(status.getAttribute('class')).toContain('bg-toast')
    expect(status.getAttribute('class')).toContain('rounded-xl')
    expect(status.getAttribute('class')).toContain('px-3.5')
    expect(status.getAttribute('class')).toContain('py-2.5')
  })

  it('offers Undo only when a card can come back', async () => {
    const onUndo = vi.fn()
    const user = userEvent.setup()
    render(<Toast message={MESSAGES.archived} canUndo onUndo={onUndo} />)

    const undo = screen.getByRole('button', { name: 'Undo' })
    expect(undo.getAttribute('class')).toContain('text-accent')
    expect(undo.getAttribute('class')).toContain('text-[14px]')
    expect(undo.getAttribute('class')).toContain('font-normal')

    await user.click(undo)
    expect(onUndo).toHaveBeenCalledTimes(1)
  })
})
