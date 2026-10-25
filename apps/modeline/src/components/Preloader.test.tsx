import { act, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Preloader } from './Preloader'

describe('Preloader', () => {
  it('renders nothing when the document has already finished loading', () => {
    render(<Preloader />)

    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })

  it('covers the page while loading and uncovers it on the load event', () => {
    Object.defineProperty(document, 'readyState', { configurable: true, get: () => 'loading' })
    const removeEventListener = vi.spyOn(window, 'removeEventListener')

    try {
      render(<Preloader />)

      expect(screen.getByTestId('preloader')).toHaveClass('fixed', 'inset-0', 'bg-black')

      act(() => {
        window.dispatchEvent(new Event('load'))
      })

      expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
      expect(removeEventListener).toHaveBeenCalledWith('load', expect.any(Function))
    } finally {
      Reflect.deleteProperty(document, 'readyState')
      removeEventListener.mockRestore()
    }
  })
})
