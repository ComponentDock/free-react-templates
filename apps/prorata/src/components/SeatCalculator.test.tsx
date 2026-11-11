import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ANNOUNCE_DELAY, CARD_TITLE, CTA_LABEL, FOOTNOTE_LINK_LABEL } from '../content'
import { SeatCalculator } from './SeatCalculator'

/** The class names the three chips can carry, read off the list items. */
function chipClasses(container: HTMLElement): string[][] {
  return [...container.querySelectorAll('.pr-tier')].map((chip) => [...chip.classList])
}

function field(container: HTMLElement): HTMLInputElement {
  return container.querySelector('.pr-field') as HTMLInputElement
}

function slider(container: HTMLElement): HTMLInputElement {
  return container.querySelector('.pr-range') as HTMLInputElement
}

function totalText(container: HTMLElement): string | null | undefined {
  return container.querySelector('.pr-amount')?.textContent
}

function detailText(container: HTMLElement): string {
  return container.querySelector('.pr-detail')?.textContent ?? ''
}

describe('SeatCalculator', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('opens at twelve seats: $140, two tier parts and the second chip inked', () => {
    const { container } = render(<SeatCalculator />)

    expect(field(container).value).toBe('12')
    expect(slider(container).value).toBe('12')
    expect(totalText(container)).toBe('$140')
    expect(detailText(container)).toBe(
      '10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly.',
    )
    expect(chipClasses(container)).toEqual([
      ['pr-tier', 'pr-tier--used'],
      ['pr-tier', 'pr-tier--used', 'pr-tier--current'],
      ['pr-tier'],
    ])
  })

  it('labels the group with the card heading instead of a dead form', () => {
    const { container } = render(<SeatCalculator />)

    const group = screen.getByRole('group', { name: CARD_TITLE })
    expect(group).toHaveClass('pr-card')
    expect(group).toBe(container.firstElementChild)
    expect(container.querySelector('form')).toBeNull()
  })

  it('moves the fill custom property onto the card root', () => {
    const { container } = render(<SeatCalculator />)
    const card = container.querySelector('.pr-card') as HTMLElement

    expect(Number.parseFloat(card.style.getPropertyValue('--pr-fill'))).toBeCloseTo(5.5276, 3)

    fireEvent.change(slider(container), { target: { value: '200' } })
    expect(card.style.getPropertyValue('--pr-fill')).toBe('100%')
  })

  it('walks the whole arithmetic from the slider', () => {
    const { container } = render(<SeatCalculator />)

    const sweep: [string, string][] = [
      ['1', '$12'],
      ['10', '$120'],
      ['11', '$130'],
      ['50', '$520'],
      ['51', '$528'],
      ['100', '$920'],
      ['200', '$1,720'],
    ]

    for (const [value, expected] of sweep) {
      fireEvent.change(slider(container), { target: { value } })
      expect(totalText(container)).toBe(expected)
    }
  })

  it('crosses into the third tier at 51 by inking every chip and growing the detail line', () => {
    const { container } = render(<SeatCalculator />)

    fireEvent.change(slider(container), { target: { value: '51' } })

    expect(chipClasses(container)).toEqual([
      ['pr-tier', 'pr-tier--used'],
      ['pr-tier', 'pr-tier--used'],
      ['pr-tier', 'pr-tier--used', 'pr-tier--current'],
    ])
    expect(detailText(container)).toBe(
      '10 × $12 + 40 × $10 + 1 × $8. Average $10.35 per seat, billed monthly.',
    )
  })

  it('inks the first chip alone at one seat and writes the singular value text', () => {
    const { container } = render(<SeatCalculator />)

    fireEvent.change(slider(container), { target: { value: '1' } })

    expect(chipClasses(container)[0]).toEqual(['pr-tier', 'pr-tier--used', 'pr-tier--current'])
    expect(chipClasses(container)[1]).toEqual(['pr-tier'])
    expect(slider(container)).toHaveAttribute('aria-valuetext', '1 seat, $12 per month')
    expect(detailText(container)).toBe('1 × $12. Average $12.00 per seat, billed monthly.')
  })

  it('mirrors a slider move into the number field', () => {
    const { container } = render(<SeatCalculator />)

    fireEvent.change(slider(container), { target: { value: '60' } })

    expect(field(container).value).toBe('60')
    expect(totalText(container)).toBe('$600')
  })

  it('lets the field be typed into without the value being rewritten under the cursor', () => {
    const { container } = render(<SeatCalculator />)
    const input = field(container)

    input.focus()
    fireEvent.change(input, { target: { value: '3' } })
    fireEvent.change(input, { target: { value: '30' } })

    expect(input.value).toBe('30')
    expect(totalText(container)).toBe('$320')
  })

  it('derives the total from the clamped value while an out-of-range number is on screen', () => {
    const { container } = render(<SeatCalculator />)
    const input = field(container)

    input.focus()
    fireEvent.change(input, { target: { value: '250' } })

    expect(input.value).toBe('250')
    expect(totalText(container)).toBe('$1,720')
    expect(slider(container).value).toBe('200')

    fireEvent.blur(input)
    expect(input.value).toBe('200')
  })

  it('treats an emptied field as one seat immediately, not on blur', () => {
    const { container } = render(<SeatCalculator />)
    const input = field(container)

    input.focus()
    fireEvent.change(input, { target: { value: '' } })

    expect(input.value).toBe('')
    expect(totalText(container)).toBe('$12')

    fireEvent.blur(input)
    expect(input.value).toBe('1')
  })

  it('never paints a total the chips disagree with', () => {
    const { container } = render(<SeatCalculator />)

    fireEvent.change(slider(container), { target: { value: '50' } })
    expect(chipClasses(container)[1]).toContain('pr-tier--current')

    fireEvent.change(slider(container), { target: { value: '51' } })
    expect(chipClasses(container)[2]).toContain('pr-tier--current')
    expect(container.querySelectorAll('[aria-current="true"]')).toHaveLength(1)
  })

  it('announces the settled value only after the drag stops', () => {
    const { container } = render(<SeatCalculator />)
    const live = container.querySelector('span.pr-vh[aria-live]') as HTMLElement

    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY)
    })
    expect(live.textContent).toBe('12 seats, $140 per month')

    fireEvent.change(slider(container), { target: { value: '51' } })
    expect(live.textContent).toBe('12 seats, $140 per month')

    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY - 1)
    })
    expect(live.textContent).toBe('12 seats, $140 per month')

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(live.textContent).toBe('51 seats, $528 per month')
  })

  it('drops a pending announcement when the seat count moves again', () => {
    const { container } = render(<SeatCalculator />)
    const live = container.querySelector('span.pr-vh[aria-live]') as HTMLElement

    fireEvent.change(slider(container), { target: { value: '20' } })
    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY - 50)
    })
    fireEvent.change(slider(container), { target: { value: '30' } })
    act(() => {
      vi.advanceTimersByTime(ANNOUNCE_DELAY)
    })

    expect(live.textContent).toBe('30 seats, $320 per month')
  })

  it('closes with a real CTA and a real volume-pricing link', () => {
    render(<SeatCalculator />)

    expect(screen.getByRole('link', { name: CTA_LABEL })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByRole('link', { name: FOOTNOTE_LINK_LABEL })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    for (const anchor of screen.getAllByRole('link')) {
      expect(anchor).toHaveAttribute('target', '_blank')
      expect(anchor).toHaveAttribute('rel', 'noreferrer noopener')
    }
  })
})
