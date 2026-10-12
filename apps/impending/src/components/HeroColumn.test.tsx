import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroColumn } from './HeroColumn'

describe('HeroColumn', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('pins the heading, sub-line and form out of flow at 19% from the left', () => {
    render(<HeroColumn />)

    const column = screen.getByTestId('hero-column')

    expect(column).toHaveClass(
      'absolute',
      'top-0',
      'left-[19%]',
      'max-w-[600px]',
      'max-[992px]:relative',
      'max-[992px]:top-auto',
      'max-[992px]:left-auto',
      'max-[992px]:flex',
      'max-[992px]:max-w-full',
      'max-[992px]:flex-col',
      'max-[992px]:items-center',
    )
    expect(Array.from(column.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'heading',
      'sub-line',
      'email-form',
    ])
  })

  it('accepts layout overrides', () => {
    render(<HeroColumn className="left-[10%]" />)

    expect(screen.getByTestId('hero-column')).toHaveClass('left-[10%]')
  })
})
