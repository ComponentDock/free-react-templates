import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('centres the heading and the clock in a padded column', () => {
    render(<Hero />)

    const hero = screen.getByTestId('hero')

    expect(hero).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'px-[15px]',
      'pt-[50px]',
      'pb-[120px]',
    )
    expect(Array.from(hero.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'heading',
      'countdown',
    ])
  })

  it('accepts layout overrides', () => {
    render(<Hero className="pb-0" />)

    expect(screen.getByTestId('hero')).toHaveClass('pb-0')
  })
})
