import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Chevron, Cross, Tick } from './Glyphs'

describe('Glyphs', () => {
  it('draws the tick as a filled circle with a white check', () => {
    const { container } = render(<Tick />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('viewBox', '0 0 20 20')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveClass('pt-ic', 'pt-ic--yes')
    expect(svg?.querySelector('circle')).toHaveAttribute('r', '10')
    expect(svg?.querySelector('path')).toHaveAttribute('stroke', '#fff')
  })

  it('draws the cross with the current colour so the token can repair it', () => {
    const { container } = render(<Cross />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveClass('pt-ic', 'pt-ic--no')
    expect(svg?.querySelector('path')).toHaveAttribute('stroke', 'currentColor')
    expect(container.querySelector('circle')).toBeNull()
  })

  it('draws the chevron at 18 px and never announces it', () => {
    const { container } = render(<Chevron />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '18')
    expect(svg).toHaveAttribute('height', '18')
    expect(svg).toHaveAttribute('focusable', 'false')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
