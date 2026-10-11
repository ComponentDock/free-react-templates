import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useTilt } from './useTilt'

function Probe({ max, scale }: { max?: number; scale?: number }) {
  const ref = useTilt<HTMLDivElement>(max, scale)
  return (
    <div ref={ref} data-testid="tilt">
      tilt
    </div>
  )
}

function withRect(el: HTMLElement) {
  el.getBoundingClientRect = () => ({ left: 0, top: 0, width: 200, height: 100 }) as DOMRect
}

describe('useTilt', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('tilts toward the pointer and resets on leave', () => {
    render(<Probe />)

    const el = screen.getByTestId('tilt')
    withRect(el)
    expect(el.style.transition).toContain('transform .3s')

    act(() => {
      el.dispatchEvent(
        new PointerEvent('pointermove', { clientX: 200, clientY: 100, bubbles: true }),
      )
    })
    expect(el.style.transform).toBe(
      'perspective(1000px) rotateX(-10.00deg) rotateY(10.00deg) scale3d(1.1,1.1,1.1)',
    )

    act(() => {
      el.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }))
    })
    expect(el.style.transform).toBe('')
  })

  it('honours custom max and scale', () => {
    render(<Probe max={40} scale={1.03} />)

    const el = screen.getByTestId('tilt')
    withRect(el)

    act(() => {
      el.dispatchEvent(new PointerEvent('pointermove', { clientX: 0, clientY: 0, bubbles: true }))
    })

    expect(el.style.transform).toBe(
      'perspective(1000px) rotateX(20.00deg) rotateY(-20.00deg) scale3d(1.03,1.03,1.03)',
    )
  })

  it('stays flat for visitors who prefer reduced motion', () => {
    vi.spyOn(window, 'matchMedia').mockImplementation(
      (query: string) =>
        ({
          matches: true,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        }) as unknown as MediaQueryList,
    )

    render(<Probe />)

    const el = screen.getByTestId('tilt')
    expect(el.style.transition).toBe('')

    act(() => {
      el.dispatchEvent(
        new PointerEvent('pointermove', { clientX: 200, clientY: 100, bubbles: true }),
      )
    })

    expect(el.style.transform).toBe('')
  })
})
