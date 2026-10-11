import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import { FlipClock } from './FlipClock'

describe('FlipClock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('lays eight dark cards out in four pairs inside the wrapping clock row', () => {
    render(<FlipClock />)

    const clock = screen.getByTestId('flip-clock')

    expect(clock).toHaveClass('relative', 'flex', 'max-w-full', 'flex-wrap', 'mb-[20px]')
    expect(clock).toHaveClass(
      'max-[1200px]:justify-center',
      'max-[576px]:max-w-[240px]',
      'max-[576px]:mr-[26px]',
    )

    const cards = screen.getAllByTestId(/^flip-card-[a-z]+-\d$/)

    expect(cards).toHaveLength(8)
    expect(screen.getAllByTestId(/^flip-divider-/)).toHaveLength(4)

    for (const card of cards) {
      expect(card).toHaveClass(
        'relative',
        'm-[2px]',
        'mb-[50px]',
        'h-[54px]',
        'w-[41px]',
        '[perspective:200px]',
      )
      expect(card.querySelectorAll('.flip-digit')).toHaveLength(2)
      expect(card.querySelector('.flip-digit')).toHaveClass(
        'flip-digit',
        'font-clock',
        'text-[35px]',
        'leading-none',
        'text-white',
      )
      expect(card.querySelector('.flip-half-up')).not.toBeNull()
      expect(card.querySelector('.flip-half-down')).not.toBeNull()
    }

    expect(screen.getByTestId('flip-card-days-0')).toHaveTextContent('33')
    expect(screen.getByTestId('flip-card-days-1')).toHaveTextContent('55')
    expect(screen.getByTestId('flip-card-hours-0')).toHaveTextContent('11')
    expect(screen.getByTestId('flip-card-hours-1')).toHaveTextContent('88')
  })

  it('prints a colon between the groups but none before the day pair', () => {
    render(<FlipClock />)

    const days = screen.getByTestId('flip-divider-days')
    const hours = screen.getByTestId('flip-divider-hours')
    const minutes = screen.getByTestId('flip-divider-minutes')
    const seconds = screen.getByTestId('flip-divider-seconds')

    for (const divider of [days, hours, minutes, seconds]) {
      expect(divider).toHaveClass('relative', 'h-[54px]', 'w-[26px]')
    }

    expect(within(days).queryByText(':')).toBeNull()
    expect(within(hours).getByText(':')).toHaveClass(
      'flex',
      'font-clock',
      'text-[30px]',
      'text-white',
    )
    expect(within(minutes).getByText(':')).toBeInTheDocument()
    expect(within(seconds).getByText(':')).toBeInTheDocument()
  })

  it('captions each group just past the divider corner', () => {
    render(<FlipClock />)

    const captions: Array<[string, string]> = [
      ['flip-divider-days', 'days'],
      ['flip-divider-hours', 'hrs'],
      ['flip-divider-minutes', 'min'],
      ['flip-divider-seconds', 'sec'],
    ]

    for (const [testId, caption] of captions) {
      const label = within(screen.getByTestId(testId)).getByText(caption)

      expect(label).toHaveClass(
        'absolute',
        'top-full',
        'left-full',
        'w-[90px]',
        'pt-[16px]',
        'text-center',
        'text-[12px]',
        'font-sans',
        'text-white',
        'uppercase',
      )
    }
  })

  it('flips only the cards whose digit changed, with the design halves and shading', () => {
    render(<FlipClock />)

    expect(screen.queryByTestId('flip-card-seconds-1-fall')).toBeNull()
    expect(screen.queryByTestId('flip-card-seconds-1-rise')).toBeNull()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('flip-card-seconds-1')).toHaveTextContent('9')

    const fall = screen.getByTestId('flip-card-seconds-1-fall')

    expect(fall).toHaveClass('flip-half', 'flip-half-up', 'animate-flip-turn-back', 'z-[2]')
    expect(fall).toHaveTextContent('0')
    expect(screen.getByTestId('flip-card-seconds-1-shadow-up')).toHaveClass(
      'flip-shadow',
      'animate-flip-show',
      'bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),#000000)]',
    )

    const rise = screen.getByTestId('flip-card-seconds-1-rise')

    expect(rise).toHaveClass('flip-half', 'flip-half-down', 'animate-flip-turn', 'z-[3]')
    expect(rise).toHaveTextContent('9')
    expect(screen.getByTestId('flip-card-seconds-1-shadow-down')).toHaveClass(
      'flip-shadow',
      'animate-flip-hide',
      'bg-[linear-gradient(to_bottom,#000000,rgba(0,0,0,0.1))]',
    )

    expect(screen.queryByTestId('flip-card-days-0-fall')).toBeNull()
  })

  it('replays the flip on the next changed card', () => {
    render(<FlipClock />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByTestId('flip-card-seconds-1')).toHaveTextContent('8')
    expect(screen.getByTestId('flip-card-seconds-1-fall')).toHaveTextContent('9')
  })

  it('accepts a className override on the clock row', () => {
    render(<FlipClock className="mt-[10px]" />)

    expect(screen.getByTestId('flip-clock')).toHaveClass('mt-[10px]')
  })
})
