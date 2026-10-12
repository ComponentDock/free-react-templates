import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandMark } from './BrandMark'

describe('BrandMark', () => {
  it('pins the app’s own dark glyph at the panel’s top-left', () => {
    render(<BrandMark />)

    const mark = screen.getByTestId('brand-mark')

    expect(mark).toHaveClass('block', 'max-w-full')

    const link = screen.getByRole('link', { name: 'Looming' })

    expect(link).toHaveAttribute('href', '#')
    expect(link).toHaveClass('inline-block', 'text-mark', 'transition-opacity', 'duration-[400ms]')

    const glyph = link.querySelector('svg')

    expect(glyph).not.toBeNull()
    expect(glyph).toHaveAttribute('viewBox', '0 0 51 44')
    expect(glyph).toHaveAttribute('fill', 'currentColor')
    expect(glyph).toHaveClass('block', 'h-[44px]', 'w-[51px]')
  })

  it('ships no image asset and accepts layout overrides', () => {
    const { container } = render(<BrandMark className="mb-[10px]" />)

    expect(container.querySelector('img')).toBeNull()
    expect(screen.getByTestId('brand-mark')).toHaveClass('mb-[10px]')
  })
})
