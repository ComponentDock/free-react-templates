import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'

afterEach(() => {
  vi.useRealTimers()
})

describe('Testimonials', () => {
  it('renders the section heading on the light band', () => {
    const { container } = render(<Testimonials />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Wines For Everyone' }),
    ).toBeInTheDocument()
    expect(container.firstElementChild?.classList.contains('bg-mist')).toBe(true)
  })

  it('cycles through four quotes with round photos and attributions', () => {
    const { container } = render(<Testimonials />)
    const slides = container.querySelectorAll('[data-slide]')
    expect(slides).toHaveLength(4)
    expect(slides[0]!.getAttribute('aria-hidden')).not.toBe('true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('— Allie Smith')).toBeInTheDocument()
    expect(container.querySelectorAll('img[class*="rounded-full"]')).toHaveLength(4)
  })

  it('advances with the next arrow and wraps around', () => {
    const { container } = render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next quote' })
    const track = () => (container.querySelector('[data-track]') as HTMLElement).style.transform

    fireEvent.click(next)
    expect(track()).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Go to quote 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(next)
    fireEvent.click(next)
    fireEvent.click(next)
    expect(track()).toBe('translateX(0%)')
    expect(screen.getByRole('button', { name: 'Go to quote 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('goes back with the previous arrow', () => {
    const { container } = render(<Testimonials />)
    const prev = screen.getByRole('button', { name: 'Previous quote' })
    const track = () => (container.querySelector('[data-track]') as HTMLElement).style.transform

    fireEvent.click(prev)
    expect(track()).toBe('translateX(-300%)')
    fireEvent.click(prev)
    expect(track()).toBe('translateX(-200%)')
  })

  it('jumps to a quote via the pagination dots', () => {
    const { container } = render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to quote 3' }))
    const track = () => (container.querySelector('[data-track]') as HTMLElement).style.transform
    expect(track()).toBe('translateX(-200%)')
    expect(screen.getByRole('button', { name: 'Go to quote 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every five seconds', () => {
    vi.useFakeTimers()
    const { container } = render(<Testimonials />)
    const track = () => (container.querySelector('[data-track]') as HTMLElement).style.transform
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toBe('translateX(-100%)')
  })
})
