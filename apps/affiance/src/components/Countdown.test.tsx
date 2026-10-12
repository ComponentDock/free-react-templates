import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'
import { COUNTDOWN_SCRIPT } from '../lib/site'

afterEach(() => {
  vi.useRealTimers()
})

/** The four live cells, read straight out of the list the band renders. */
function cells(container: HTMLElement) {
  return Array.from(container.querySelectorAll('li'))
}

describe('Countdown', () => {
  it('renders the script cell and the four live cells in the brand bar', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2028-06-17T14:59:55Z'))

    const { container } = render(<Countdown />)
    const [script, ...live] = cells(container)

    expect(script).toHaveClass('bg-brand-cell')
    expect(script).toHaveTextContent(COUNTDOWN_SCRIPT)
    expect(live).toHaveLength(4)
    expect(live.map((cell) => cell.querySelector('h3')?.textContent)).toEqual([
      '00',
      '00',
      '00',
      '05',
    ])
    expect(live.map((cell) => cell.querySelector('span[aria-hidden]')?.textContent)).toEqual([
      'Days',
      'Hours',
      'Minutes',
      'Seconds',
    ])
    expect(live[0] as HTMLElement).toHaveClass('border-hairline')
  })

  it('falls one second at a time and announces the value', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2028-06-17T14:59:55Z'))

    const { container } = render(<Countdown />)

    expect(container.querySelectorAll('.sr-only')[3] as HTMLElement).toHaveTextContent('5 seconds')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    const [, ...live] = cells(container)

    expect((live[3] as HTMLElement).querySelector('h3')).toHaveTextContent('04')
    expect((live[0] as HTMLElement).querySelector('h3')).toHaveTextContent('00')
    expect(container.querySelectorAll('.sr-only')[3] as HTMLElement).toHaveTextContent('4 seconds')
  })

  it('stops its clock when the band leaves the page', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2028-06-17T14:59:55Z'))

    const clear = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<Countdown />)

    unmount()

    expect(clear).toHaveBeenCalled()
  })

  it('wears the design bar with the tinted frame and the bar tokens', () => {
    const { container } = render(<Countdown />)

    const bar = container.querySelector('.rounded-bar')

    expect(bar).toHaveClass('bg-brand', 'shadow-bar', 'relative')
    expect(bar?.querySelector('span[aria-hidden]')).toHaveClass(
      'inset-[10px]',
      'border-dashed',
      'border-timer-frame',
    )
  })
})
