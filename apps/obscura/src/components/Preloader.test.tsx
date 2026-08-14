import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Preloader } from './Preloader'

describe('Preloader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('covers the viewport with a solid black overlay while loading', () => {
    render(<Preloader />)
    const overlay = screen.getByTestId('preloader')
    expect(overlay).toHaveClass('bg-black')
    expect(overlay).toHaveClass('fixed')
  })

  it('shows a centered circular spinner with the red/purple ring', () => {
    render(<Preloader />)
    const ring = screen.getByTestId('preloader-ring')
    expect(ring).toHaveClass('animate-spin')
    expect(ring).toHaveClass('border-t-brand-red')
    expect(ring).toHaveClass('border-r-brand-purple')
    expect(ring).toHaveClass('border-b-brand-red')
    expect(ring).toHaveClass('border-l-brand-purple')
  })

  it('disappears once the page is ready', () => {
    render(<Preloader />)
    expect(screen.getByTestId('preloader')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(600)
    })
    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })
})
