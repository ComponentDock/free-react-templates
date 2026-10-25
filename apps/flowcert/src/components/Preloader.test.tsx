import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Preloader } from './Preloader'

function setReadyState(value: DocumentReadyState) {
  Object.defineProperty(document, 'readyState', { value, configurable: true })
}

afterEach(() => {
  delete (document as unknown as Record<string, unknown>).readyState
  vi.restoreAllMocks()
})

describe('Preloader', () => {
  it('renders nothing once the document is already complete', () => {
    setReadyState('complete')
    render(<Preloader />)

    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })

  it('covers the page while the document is still loading, then clears on load', () => {
    setReadyState('loading')
    const { container } = render(<Preloader />)

    expect(screen.getByTestId('preloader')).toBeInTheDocument()
    expect(container.querySelector('.animate-spin')).not.toBeNull()

    setReadyState('complete')
    act(() => {
      window.dispatchEvent(new Event('load'))
    })

    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })

  it('cleans up its load listener on unmount', () => {
    setReadyState('loading')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Preloader />)

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('load', expect.any(Function))
  })
})
