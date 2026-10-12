import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PeakMark } from './PeakMark'

describe('PeakMark', () => {
  it('draws the app’s own white two-peak glyph in a growing container', () => {
    render(<PeakMark />)

    const link = screen.getByRole('link', { name: 'Impending' })

    expect(link.parentElement).toHaveClass('my-[10px]', 'mr-[30px]', 'grow')
    expect(link).toHaveClass('inline-block', 'text-white', 'transition-opacity', 'duration-[400ms]')

    const glyph = link.querySelector('svg')

    expect(glyph).toHaveAttribute('aria-hidden', 'true')
    expect(glyph).toHaveAttribute('viewBox', '0 0 55 31')
    expect(glyph).toHaveClass('h-[31px]', 'w-[55px]')
    expect(glyph?.querySelectorAll('path')).toHaveLength(2)
  })

  it('accepts layout overrides', () => {
    render(<PeakMark className="order-2" />)

    expect(screen.getByRole('link', { name: 'Impending' }).parentElement).toHaveClass('order-2')
  })
})
