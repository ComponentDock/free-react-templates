import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandMark } from './BrandMark'

describe('BrandMark', () => {
  it("draws the app's own monogram in a plain block wrapper, never growing the column", () => {
    render(<BrandMark />)

    const wrapper = screen.getByTestId('brand-mark')

    expect(wrapper).toHaveClass('block', 'max-w-full')
    expect(wrapper).not.toHaveClass('flex-1')
    expect(wrapper).not.toHaveClass('grow')

    const link = screen.getByRole('link', { name: 'Prologue' })

    expect(link).toHaveAttribute('href', '#')

    const glyph = wrapper.querySelector('svg')

    expect(glyph).not.toBeNull()
    expect(glyph).toHaveAttribute('viewBox', '0 0 35 43')
    expect(glyph).toHaveClass('block', 'h-[43px]', 'w-[35px]')
  })

  it('accepts layout overrides', () => {
    render(<BrandMark className="self-end" />)

    expect(screen.getByTestId('brand-mark')).toHaveClass('self-end')
  })
})
