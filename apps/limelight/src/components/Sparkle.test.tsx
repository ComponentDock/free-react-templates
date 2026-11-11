import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sparkle } from './Sparkle'

describe('Sparkle', () => {
  it('draws the four-point glyph at twelve pixels and hides it from the a11y tree', () => {
    const { container } = render(<Sparkle />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('lm-spark')
    expect(svg).toHaveAttribute('width', '12')
    expect(svg).toHaveAttribute('height', '12')
    expect(svg).toHaveAttribute('viewBox', '0 0 12 12')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('focusable', 'false')
  })

  it('fills from currentColor so the card can recolour it', () => {
    const { container } = render(<Sparkle />)

    expect(container.querySelector('path')).toHaveAttribute('fill', 'currentColor')
  })
})
