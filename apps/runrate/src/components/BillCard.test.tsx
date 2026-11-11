import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ANNOUNCE_DELAY, BILL_ID, COMPONENT_DOCK } from '../content'
import { estimateFor } from '../pricing'
import { BillCard } from './BillCard'

describe('BillCard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('prints the total as an output bound to the three controls', () => {
    render(<BillCard estimate={estimateFor(4, 4, false)} />)

    const output = screen.getByText('$39.40')
    expect(output.tagName).toBe('OUTPUT')
    expect(output).toHaveAttribute('id', 'runrate-total')
    expect(output).toHaveAttribute('for', 'runrate-calls runrate-storage runrate-support')
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', BILL_ID)
  })

  it('labels the card with its own heading', () => {
    render(<BillCard estimate={estimateFor(4, 4, false)} />)

    const card = screen.getByRole('complementary', { name: 'Your estimated bill' })
    expect(card).toHaveClass('rr-bill')
  })

  it('holds the previous sentence until the lull, then speaks the new one', () => {
    const { container, rerender } = render(<BillCard estimate={estimateFor(4, 4, false)} />)
    // The `<output>` carries the implicit `status` role too, so the live region
    // is selected by its class — it is the node the debounce writes into.
    const status = container.querySelector('.rr-vh')!

    expect(status).toHaveTextContent('')
    expect(status).toHaveAttribute('role', 'status')
    expect(status).toHaveAttribute('aria-live', 'polite')

    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY)
    })
    expect(status).toHaveTextContent('Estimated total $39.40 per month.')

    rerender(<BillCard estimate={estimateFor(4, 4, true)} />)
    expect(status).toHaveTextContent('Estimated total $39.40 per month.')

    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY - 1)
    })
    expect(status).toHaveTextContent('Estimated total $39.40 per month.')

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(status).toHaveTextContent('Estimated total $188.40 per month.')
  })

  it('never speaks a sentence for an estimate it no longer shows', () => {
    const { container, rerender } = render(<BillCard estimate={estimateFor(4, 4, false)} />)
    const status = container.querySelector('.rr-vh')!

    rerender(<BillCard estimate={estimateFor(6, 4, false)} />)
    rerender(<BillCard estimate={estimateFor(8, 4, false)} />)

    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY)
    })

    expect(status).toHaveTextContent('Estimated total $279.40 per month.')
    expect(screen.getByText('$279.40')).toBeInTheDocument()
  })

  it('points its one call to action at Component Dock, not at a dead anchor', () => {
    render(<BillCard estimate={estimateFor(4, 4, false)} />)

    const cta = screen.getByRole('link', { name: 'Create a project' })
    expect(cta).toHaveAttribute('href', COMPONENT_DOCK)
    expect(cta).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('carries the fine print as a single sentence', () => {
    render(<BillCard estimate={estimateFor(4, 4, false)} />)

    expect(screen.getByText(/An estimate only/)).toHaveClass('rr-fine')
  })
})
