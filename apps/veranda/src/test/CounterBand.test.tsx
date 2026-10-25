import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { CounterBand } from '../components/CounterBand'
import { installIO, installRaf, resetMedia, stubMedia } from '../test/helpers'

afterEach(() => {
  vi.unstubAllGlobals()
  resetMedia()
})

describe('CounterBand', () => {
  it('ships the literal values so a no-script visitor reads the truth', () => {
    render(<CounterBand />)

    for (const value of ['14,200', '92%', '< 3h', '240']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    expect(screen.getByText('Median first reply')).toBeInTheDocument()
  })

  it('animates from zero and lands on the literal when it half-enters view', () => {
    const observers = installIO()
    const raf = installRaf()
    render(<CounterBand />)

    const frame = (timestamp: number) => {
      let pending = raf.pending()
      while (pending > 0) {
        raf.flush(timestamp)
        pending -= 1
      }
    }

    act(() => {
      observers.forEach((observer) => {
        observer.fire(false, observer.elements[0] as Element)
      })
    })
    expect(raf.pending()).toBe(0)

    act(() => {
      observers.forEach((observer) => {
        observer.fire(true, observer.elements[0] as Element)
      })
    })
    expect(raf.pending()).toBeGreaterThan(0)

    act(() => {
      frame(0)
    })
    expect(screen.getAllByText('0')).toHaveLength(2)
    expect(screen.getByText('0%')).toBeInTheDocument()
    expect(screen.getByText('< 0h')).toBeInTheDocument()

    act(() => {
      frame(1000)
    })
    expect(screen.getByText('12,425')).toBeInTheDocument()
    expect(screen.getByText('81%')).toBeInTheDocument()

    act(() => {
      frame(2500)
    })
    expect(screen.getByText('14,200')).toBeInTheDocument()
    expect(screen.getByText('< 3h')).toBeInTheDocument()
  })

  it('keeps the literal under reduced motion', () => {
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    const observers = installIO()
    const raf = installRaf()
    render(<CounterBand />)

    act(() => {
      observers.forEach((observer) => {
        observer.fire(true, observer.elements[0] as Element)
      })
    })

    expect(raf.pending()).toBe(0)
    expect(screen.getByText('14,200')).toBeInTheDocument()
  })
})
