import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Glyph } from './Glyph'

describe('Glyph', () => {
  it('renders a centred 60px white gift outline with 23px below it', () => {
    const { container } = render(<Glyph />)

    const line = container.firstElementChild

    expect(line).toHaveClass('pb-[23px]', 'text-center')

    const glyph = container.querySelector('svg')

    expect(glyph).toHaveClass('inline-block', 'size-[60px]', 'text-white')
    expect(glyph).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('glyph')).toBe(line)
  })

  it('accepts a className override', () => {
    const { container } = render(<Glyph className="pb-0" />)

    expect(container.firstElementChild).toHaveClass('pb-0')
  })
})
