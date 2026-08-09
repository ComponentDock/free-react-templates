import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Preloader } from './Preloader'

function stubReadyState(value: string) {
  Object.defineProperty(document, 'readyState', {
    value,
    configurable: true,
  })
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Preloader', () => {
  it('shows the loading overlay while the page is loading', () => {
    stubReadyState('loading')
    render(<Preloader />)

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument()
  })

  it('hides the overlay when the window finishes loading', () => {
    stubReadyState('loading')
    render(<Preloader />)

    fireEvent(window, new Event('load'))
    expect(screen.queryByRole('status', { name: 'Loading' })).not.toBeInTheDocument()
  })

  it('hides the overlay immediately when the page is already complete', () => {
    stubReadyState('complete')
    render(<Preloader />)

    expect(screen.queryByRole('status', { name: 'Loading' })).not.toBeInTheDocument()
  })

  it('removes the load listener on unmount', () => {
    stubReadyState('loading')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Preloader />)

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('load', expect.any(Function))
  })
})
