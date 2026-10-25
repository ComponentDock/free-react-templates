import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { perViewFor, usePerView } from './usePerView'

function Slides() {
  const perView = usePerView()
  return <p data-testid="per-view">{perView}</p>
}

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

afterEach(() => {
  setWidth(1024)
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
})

describe('perViewFor', () => {
  it('is three at desktop, two at tablet and one on a phone', () => {
    expect(perViewFor(1280)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(1023)).toBe(2)
    expect(perViewFor(640)).toBe(2)
    expect(perViewFor(639)).toBe(1)
  })
})

describe('usePerView', () => {
  it('reads the viewport at mount and again on resize', () => {
    setWidth(1024)
    render(<Slides />)
    expect(screen.getByTestId('per-view')).toHaveTextContent('3')

    act(() => {
      setWidth(760)
      window.dispatchEvent(new Event('resize'))
    })
    expect(screen.getByTestId('per-view')).toHaveTextContent('2')

    act(() => {
      setWidth(390)
      window.dispatchEvent(new Event('resize'))
    })
    expect(screen.getByTestId('per-view')).toHaveTextContent('1')
  })
})
