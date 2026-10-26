import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sparkline } from './Sparkline'

const PATH = 'M0 32 L10 30 L20 31 L30 26 L40 27 L50 22 L60 24 L70 18 L80 19 L90 13 L100 14 L110 8 L120 6'

function renderSpark(accent = '#4f46e5', label = 'Revenue trend, rising steadily over 30 days') {
  const { container } = render(<Sparkline accent={accent} path={PATH} label={label} />)
  return container.querySelector('svg') as SVGElement
}

describe('Sparkline', () => {
  it('is a labelled image with the reference viewBox and stretch', () => {
    const svg = renderSpark()

    expect(screen.getByRole('img', { name: 'Revenue trend, rising steadily over 30 days' })).toBe(
      svg,
    )
    expect(svg.getAttribute('viewBox')).toBe('0 0 120 40')
    expect(svg.getAttribute('preserveAspectRatio')).toBe('none')
  })

  it('stretches into a 56px strip with 14/10 margins and no clipping', () => {
    const svg = renderSpark()

    expect(svg.className.baseVal ?? svg.getAttribute('class')).toContain('h-[56px]')
    expect(svg.getAttribute('class')).toContain('w-full')
    expect(svg.getAttribute('class')).toContain('mt-[14px]')
    expect(svg.getAttribute('class')).toContain('mb-[10px]')
    expect(svg.getAttribute('class')).toContain('overflow-visible')
  })

  it('draws a fill path closing to the bottom of the viewBox', () => {
    const svg = renderSpark()
    const [area, line] = Array.from(svg.querySelectorAll('path')) as [SVGPathElement, SVGPathElement]

    expect(area!.getAttribute('d')).toBe(`${PATH} L120 40 L0 40 Z`)
    expect(area!.getAttribute('fill')).toMatch(/^url\(#spark-.+\)$/)
    expect(line!.getAttribute('d')).toBe(PATH)
    expect(line!.getAttribute('fill')).toBe('none')
  })

  it('keeps the stroke 2px wide under a 2.04x horizontal stretch', () => {
    const svg = renderSpark()
    const line = svg.querySelectorAll('path')[1]!

    expect(line!.getAttribute('stroke')).toBe('#4f46e5')
    expect(line!.getAttribute('stroke-width')).toBe('2')
    expect(line!.getAttribute('vector-effect')).toBe('non-scaling-stroke')
    expect(line!.getAttribute('stroke-linecap')).toBe('round')
    expect(line!.getAttribute('stroke-linejoin')).toBe('round')
  })

  it('fades the accent from 28% to 0 in its own gradient', () => {
    const svg = renderSpark('#0891b2')
    const gradient = svg.querySelector('linearGradient') as SVGLinearGradientElement
    const stops = Array.from(gradient.querySelectorAll('stop')) as [SVGStopElement, SVGStopElement]

    expect(gradient.getAttribute('x1')).toBe('0')
    expect(gradient.getAttribute('x2')).toBe('0')
    expect(gradient.getAttribute('y1')).toBe('0')
    expect(gradient.getAttribute('y2')).toBe('1')
    expect(stops.map((stop) => stop.getAttribute('stop-color'))).toEqual(['#0891b2', '#0891b2'])
    expect(stops.map((stop) => stop.getAttribute('stop-opacity'))).toEqual(['.28', '0'])
  })

  it('gives every instance a distinct, selector-safe gradient id', () => {
    const first = renderSpark()
    const second = renderSpark('#16a34a')

    const firstId = first.querySelector('linearGradient')?.getAttribute('id') as string
    const secondId = second.querySelector('linearGradient')?.getAttribute('id') as string

    expect(firstId).not.toBe(secondId)
    expect(firstId).toMatch(/^spark-[A-Za-z0-9_-]+$/)
    expect(first.querySelectorAll('path')[0]!.getAttribute('fill')).toBe(`url(#${firstId})`)
    expect(second.querySelectorAll('path')[0]!.getAttribute('fill')).toBe(`url(#${secondId})`)
  })
})
