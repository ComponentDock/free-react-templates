import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { describe, expect, it } from 'vitest'
import { ScrollProgress } from '../components/ScrollProgress'

describe('ScrollProgress', () => {
  it('reports the scroll ratio and clamps it', () => {
    render(<ScrollProgress />)

    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000,
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 5000 })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at zero when the page cannot scroll', () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 800,
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 900 })

    render(<ScrollProgress />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
})
