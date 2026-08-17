import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'
import { GALLERY } from '../data'

describe('Gallery', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four photos and shows only the first slide', () => {
    const { container } = render(<Gallery />)

    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBe(GALLERY.length)
    expect(imgs[0]).toHaveAttribute('src', GALLERY[0])

    const figures = container.querySelectorAll('figure')
    expect(figures[0]).not.toHaveAttribute('aria-hidden', 'true')
    expect(figures[1]).toHaveAttribute('aria-hidden', 'true')
    expect(figures[2]).toHaveAttribute('aria-hidden', 'true')
    expect(figures[3]).toHaveAttribute('aria-hidden', 'true')
  })

  it('switches slides via the dot navigation', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery />)

    await user.click(screen.getByRole('button', { name: 'Go to gallery photo 3' }))
    const figures = container.querySelectorAll('figure')
    expect(figures[2]).not.toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByRole('button', { name: 'Go to gallery photo 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Go to gallery photo 1' }))
    const figuresAfter = container.querySelectorAll('figure')
    expect(figuresAfter[0]).not.toHaveAttribute('aria-hidden', 'true')
    expect(figuresAfter[2]).toHaveAttribute('aria-hidden', 'true')
  })

  it('auto-advances to the next slide every five seconds', () => {
    vi.useFakeTimers()
    const { container } = render(<Gallery />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    const figures = container.querySelectorAll('figure')
    expect(figures[1]).not.toHaveAttribute('aria-hidden', 'true')
    expect(figures[0]).toHaveAttribute('aria-hidden', 'true')

    act(() => {
      vi.advanceTimersByTime(5000 * 3)
    })
    const figuresWrapped = container.querySelectorAll('figure')
    expect(figuresWrapped[0]).not.toHaveAttribute('aria-hidden', 'true')
  })
})