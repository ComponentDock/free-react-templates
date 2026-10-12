import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-01T00:00:00.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('lays the four units out in a wrapping row with the design paddings', () => {
    render(<Countdown />)

    expect(screen.getByTestId('countdown')).toHaveClass(
      'flex',
      'flex-wrap',
      'pt-[15px]',
      'pb-[15px]',
      'pr-[36px]',
    )

    for (const key of ['days', 'hours', 'minutes', 'seconds']) {
      expect(screen.getByTestId(`countdown-${key}`)).toHaveClass(
        'flex',
        'flex-wrap',
        'items-end',
        'my-[8px]',
        'mr-[22px]',
      )
      expect(screen.getByTestId(`countdown-${key}-value`)).toHaveClass(
        'min-w-[46px]',
        'text-[30px]',
        'leading-none',
        'text-white',
      )
      expect(screen.getByTestId(`countdown-${key}-label`)).toHaveClass(
        'pb-[2px]',
        'text-[18px]',
        'leading-none',
        'text-white',
      )
    }
  })

  it('labels the four units Days, Hr, Min and Sec in that order', () => {
    render(<Countdown />)

    const labels = screen.getAllByTestId(/^countdown-.*-label$/).map((el) => el.textContent)

    expect(labels).toEqual(['Days', 'Hr', 'Min', 'Sec'])
  })

  it('opens at 35 days 19 hours with the days unpadded and the rest zero-padded', () => {
    render(<Countdown />)

    expect(screen.getByTestId('countdown-days-value')).toHaveTextContent('35')
    expect(screen.getByTestId('countdown-hours-value')).toHaveTextContent('19')
    expect(screen.getByTestId('countdown-minutes-value')).toHaveTextContent('00')
    expect(screen.getByTestId('countdown-seconds-value')).toHaveTextContent('00')
  })

  it('accepts a className override on the group', () => {
    render(<Countdown className="pr-0" />)

    expect(screen.getByTestId('countdown')).toHaveClass('pr-0')
  })
})
