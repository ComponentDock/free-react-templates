import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { CountdownBar } from './CountdownBar'

describe('CountdownBar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders one bar of four white cells with a divider on the first three only', () => {
    const { container } = render(<CountdownBar />)

    const bar = container.firstElementChild
    expect(bar).toHaveClass(
      'flex',
      'w-[360px]',
      'max-w-full',
      'flex-wrap',
      'items-center',
      'justify-center',
      'overflow-hidden',
      'rounded-b-bar',
    )

    const cells = screen.getAllByTestId(/countdown-cell-/)

    expect(cells).toHaveLength(4)
    for (const cell of cells) {
      expect(cell).toHaveClass(
        'h-[92px]',
        'w-[calc((100%_-_3px)/4)]',
        'bg-white',
        'flex-col',
        'items-center',
        'justify-center',
      )
    }

    expect(cells[0]).toHaveClass('border-r', 'border-divider')
    expect(cells[1]).toHaveClass('border-r', 'border-divider')
    expect(cells[2]).toHaveClass('border-r', 'border-divider')
    expect(cells[3]).not.toHaveClass('border-r')
  })

  it('stacks a bold number over an uppercase label in each cell', () => {
    render(<CountdownBar />)

    expect(screen.getByText('Days')).toHaveClass(
      'font-heading',
      'text-[12px]',
      'text-label',
      'uppercase',
    )

    const numbers = screen.getAllByText(/^\d{2}$|^\d+$/)
    expect(numbers).toHaveLength(4)
    expect(numbers[0]).toHaveTextContent('35')
    expect(numbers[0]).toHaveClass('text-[36px]', 'font-bold', 'text-number', 'pb-[7px]')
    expect(numbers[1]).toHaveTextContent('18')

    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('ticks the values once a second', () => {
    render(<CountdownBar />)

    expect(screen.getByTestId('countdown-cell-hours')).toHaveTextContent('18')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('countdown-cell-hours')).toHaveTextContent('17')
    expect(screen.getByTestId('countdown-cell-minutes')).toHaveTextContent('59')
    expect(screen.getByTestId('countdown-cell-seconds')).toHaveTextContent('59')
  })

  it('accepts a className override on the bar', () => {
    const { container } = render(<CountdownBar className="shadow-lg" />)

    expect(container.firstElementChild).toHaveClass('shadow-lg')
  })
})
