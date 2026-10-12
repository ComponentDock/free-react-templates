import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pending } from './Pending'

describe('Pending', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-01T00:00:00.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('is one full-height column distributing exactly three bands space-between', () => {
    render(<Pending />)

    const page = screen.getByTestId('pending')

    expect(page.tagName).toBe('MAIN')
    expect(page).toHaveClass(
      'relative',
      'z-[1]',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-col',
      'items-center',
      'justify-between',
      'px-[75px]',
      'pt-[20px]',
      'pb-[40px]',
      'max-[576px]:px-[15px]',
    )

    const inFlow = Array.from(page.children).filter(
      (child) => !child.className.includes('absolute') && !child.className.includes('fixed'),
    )

    expect(inFlow.map((child) => child.getAttribute('data-testid'))).toEqual([
      'top-bar',
      'centre-band',
      'bottom-bar',
    ])
  })

  it('lays ONE 50% scrim above the slideshow and below every word', () => {
    render(<Pending />)

    const scrim = screen.getByTestId('scrim')

    expect(scrim).toHaveClass('absolute', 'inset-0', 'z-[-1]', 'bg-black/50')
    expect(scrim).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('pending')).toContainElement(scrim)
  })

  it('keeps the fixed slideshow OUT of the column so every band paints over it', () => {
    render(<Pending />)

    const page = screen.getByTestId('pending')
    const slideshow = screen.getByTestId('slideshow')

    expect(page).not.toContainElement(slideshow)
    expect(slideshow.nextElementSibling).toBe(page)
    expect(slideshow).toHaveClass('fixed', 'z-0')
    expect(page).toHaveClass('relative', 'z-[1]')
  })

  it('carries no navbar, no footer band and no second section', () => {
    render(<Pending />)

    const page = screen.getByTestId('pending')

    expect(page.querySelector('nav')).toBeNull()
    expect(page.querySelector('footer')).toBeNull()
    expect(page.querySelectorAll('section')).toHaveLength(0)
    expect(page.querySelectorAll('main')).toHaveLength(0)
    expect(screen.queryByRole('navigation')).toBeNull()
  })

  it('pins the credit line inside the column so the bands keep their geometry', () => {
    render(<Pending />)

    const page = screen.getByTestId('pending')
    const line = screen.getByTestId('attribution')

    expect(page).toContainElement(line)
    expect(line).toHaveClass('absolute')
  })

  it('accepts a className override', () => {
    render(<Pending className="px-0" />)

    expect(screen.getByTestId('pending')).toHaveClass('px-0')
  })
})
