import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { CountdownState } from '../hooks/useCountdown'
import { Countdown } from './Countdown'

const LIVE: CountdownState = {
  days: '8',
  hours: '01',
  minutes: '00',
  seconds: '04',
  done: false,
  label: '8 days, 1 hour, 0 minutes and 4 seconds until doors open',
}

describe('Countdown', () => {
  it('is a timer that never announces itself once a second', () => {
    render(<Countdown state={LIVE} />)

    const timer = screen.getByRole('timer')
    expect(timer).toHaveAttribute('aria-live', 'off')
    expect(timer).toHaveAttribute('aria-atomic', 'true')
    expect(timer).toHaveAttribute('aria-label', LIVE.label)
  })

  it('renders the four tiles in order with their labels', () => {
    const { container } = render(<Countdown state={LIVE} />)

    const labels = Array.from(container.querySelectorAll('.sp-lbl')).map((node) => node.textContent)
    expect(labels).toEqual(['Days', 'Hours', 'Minutes', 'Seconds'])

    const numbers = Array.from(container.querySelectorAll('.sp-num')).map((node) => node.textContent)
    expect(numbers).toEqual(['8', '01', '00', '04'])
    expect(container.querySelectorAll('.sp-unit')).toHaveLength(4)
  })

  it('shows four zeroes once the doors are open', () => {
    const { container } = render(
      <Countdown state={{ ...LIVE, days: '0', hours: '00', minutes: '00', seconds: '00', done: true }} />,
    )

    expect(container.querySelectorAll('.sp-num')).toHaveLength(4)
    expect(Array.from(container.querySelectorAll('.sp-num')).map((n) => n.textContent)).toEqual([
      '0',
      '00',
      '00',
      '00',
    ])
  })
})
