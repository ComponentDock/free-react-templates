import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { mockReducedMotion } from '../test/match-media'

const slideImage = () => screen.getByRole('img')

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('lays out the headline, two square CTAs, the rail and the controls', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Fashionista')
    expect(heading).toHaveClass('xl:text-[160px]', 'text-ink', 'font-bold')

    expect(screen.getByRole('link', { name: 'View the looks' })).toHaveClass('site-btn', 'bg-white')
    expect(screen.getByRole('link', { name: 'About the brand' })).toHaveClass('site-btn', 'bg-ink')

    expect(screen.getAllByRole('link', { name: /Pinterest|Facebook|Twitter|Dribbble|Behance/ })).toHaveLength(5)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toHaveClass('h-[84px]', 'bg-ink')
    expect(screen.getByRole('button', { name: 'Next slide' })).toHaveClass('h-[84px]', 'bg-white')
    expect(screen.getByText('We love our brand')).toHaveClass('rotate-90')
  })

  it('advances and rewinds through two distinct photographs', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-1'))

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-2'))

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-1'))
  })

  it('autoplays, and pauses while the pointer is over the band', () => {
    vi.useFakeTimers()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-2'))

    fireEvent.mouseEnter(screen.getByLabelText('Campaign'))
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-2'))

    fireEvent.mouseLeave(screen.getByLabelText('Campaign'))
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-1'))
  })

  it('never autoplays when the visitor prefers reduced motion', () => {
    vi.useFakeTimers()
    mockReducedMotion()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(18000)
    })

    expect(slideImage()).toHaveAttribute('src', expect.stringContaining('modeline-1'))
  })
})
