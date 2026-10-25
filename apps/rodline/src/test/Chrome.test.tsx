import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Preloader, ScrollProgress, SkipLink } from '../components/Chrome'
import { setScroll } from './helpers'

afterEach(() => {
  Object.defineProperty(document, 'readyState', { configurable: true, value: 'complete' })
})

describe('SkipLink', () => {
  it('points at the main landmark', () => {
    render(<SkipLink />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })
})

describe('ScrollProgress', () => {
  it('is zero at the top and tracks the scrolled ratio', () => {
    render(<ScrollProgress />)

    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '0')

    act(() => setScroll(500, 2000, 1000))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50')
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '50%' })

    act(() => setScroll(2500, 2000, 1000))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at zero on a page shorter than the viewport', () => {
    render(<ScrollProgress />)

    act(() => setScroll(120, 500, 1000))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })
})

describe('Preloader', () => {
  it('fades immediately when the document has already loaded, then unmounts', async () => {
    render(<Preloader />)

    const sheet = screen.getByTestId('preloader')
    expect(sheet).toHaveAttribute('data-phase', 'fading')
    expect(sheet).toHaveClass('opacity-0')

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 350))
    })

    expect(screen.queryByTestId('preloader')).toBeNull()
  })

  it('waits for the load event while the document is still loading', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, value: 'loading' })

    const { unmount } = render(<Preloader />)
    expect(screen.getByTestId('preloader')).toHaveAttribute('data-phase', 'loading')
    expect(screen.getByTestId('preloader')).toHaveClass('opacity-100')

    act(() => {
      window.dispatchEvent(new Event('load'))
    })
    expect(screen.getByTestId('preloader')).toHaveAttribute('data-phase', 'fading')

    unmount()
  })
})
