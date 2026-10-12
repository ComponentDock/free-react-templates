import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { CountdownRow } from './CountdownRow'

const SECOND = 1000

describe('CountdownRow', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('lays four units out with three colons and the width caps that wrap the row', () => {
    render(<CountdownRow />)

    const row = screen.getByTestId('countdown')

    expect(row).toHaveClass(
      'flex',
      'flex-wrap',
      'justify-center',
      'max-[576px]:max-w-[170px]',
      'min-[577px]:max-[992px]:max-w-[370px]',
    )
    expect(Array.from(row.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'countdown-unit-days',
      'countdown-separator-outer',
      'countdown-unit-hr',
      'countdown-separator-middle',
      'countdown-unit-min',
      'countdown-separator-outer',
      'countdown-unit-sec',
    ])
    expect(screen.getAllByTestId('countdown-separator-outer')).toHaveLength(2)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hr')).toBeInTheDocument()
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Sec')).toBeInTheDocument()
  })

  it('counts down 35 days and 19 hours from the first paint, one tick a second', () => {
    render(<CountdownRow />)

    expect(screen.getByTestId('countdown-unit-days-value')).toHaveTextContent('35')
    expect(screen.getByTestId('countdown-unit-hr-value')).toHaveTextContent('19')
    expect(screen.getByTestId('countdown-unit-min-value')).toHaveTextContent('00')
    expect(screen.getByTestId('countdown-unit-sec-value')).toHaveTextContent('00')

    act(() => {
      vi.advanceTimersByTime(SECOND)
    })

    expect(screen.getByTestId('countdown-unit-days-value')).toHaveTextContent('35')
    expect(screen.getByTestId('countdown-unit-hr-value')).toHaveTextContent('18')
    expect(screen.getByTestId('countdown-unit-min-value')).toHaveTextContent('59')
    expect(screen.getByTestId('countdown-unit-sec-value')).toHaveTextContent('59')
  })

  it('accepts layout overrides', () => {
    render(<CountdownRow className="max-w-none" />)

    expect(screen.getByTestId('countdown')).toHaveClass('max-w-none')
  })
})
