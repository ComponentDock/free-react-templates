import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { EnvelopeArt } from './EnvelopeArt'

describe('EnvelopeArt', () => {
  it('draws the six reference shapes inside one hidden svg', () => {
    const { container } = render(<EnvelopeArt />)
    const svg = container.querySelector('svg') as SVGSVGElement
    const shapes = Array.from(svg.children)

    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).toHaveAttribute('viewBox', '0 0 240 200')
    expect(shapes).toHaveLength(6)

    const [envelope, flap, letter, rules, badge, check] = shapes as SVGElement[]

    expect(envelope).toHaveAttribute('fill', '#fde047')
    expect(envelope).toHaveAttribute('rx', '14')
    expect(flap).toHaveAttribute('stroke', '#1e3a8a')
    expect(letter).toHaveAttribute('fill', '#fff')
    expect(letter).toHaveAttribute('transform', 'rotate(-6 120 65)')
    expect(rules).toHaveAttribute('stroke', '#93c5fd')
    expect(badge).toHaveAttribute('fill', '#f472b6')
    expect(check).toHaveAttribute('stroke', '#fff')
  })

  it('sizes itself to the art panel', () => {
    const { container } = render(<EnvelopeArt />)
    const className = (container.querySelector('svg') as SVGSVGElement).getAttribute('class') ?? ''

    expect(className).toContain('w-full')
    expect(className).toContain('max-w-[260px]')
    expect(className).toContain('max-[640px]:max-w-[200px]')
    expect(className).toContain('h-auto')
  })
})
