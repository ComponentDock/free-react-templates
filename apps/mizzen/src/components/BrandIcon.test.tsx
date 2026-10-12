import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { CHANNELS } from '../lib/site'
import { circleMarkClass } from '../lib/styles'

describe('BrandIcon — the four marks the circles wear', () => {
  it('draws a real path for every channel on the page', () => {
    for (const channel of CHANNELS) {
      const { container } = render(<BrandIcon name={channel.name} className={circleMarkClass} />)

      const svg = container.querySelector('svg') as SVGSVGElement
      const path = svg.querySelector('path') as SVGPathElement

      expect(svg.getAttribute('viewBox')).toBe('0 0 24 24')
      expect(svg.getAttribute('fill')).toBe('currentColor')
      expect(svg.getAttribute('class')).toBe(circleMarkClass)
      expect((path.getAttribute('d') ?? '').length).toBeGreaterThan(40)
    }
  })

  it('stays out of the accessibility tree, because the circle around it carries the name', () => {
    const { container } = render(
      <BrandIcon name={CHANNELS[0]!.name} className={circleMarkClass} />,
    )

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('draws a different mark for every channel', () => {
    const marks = CHANNELS.map((channel) => {
      const { container } = render(<BrandIcon name={channel.name} className={circleMarkClass} />)

      return (container.querySelector('path') as SVGPathElement).getAttribute('d')
    })

    expect(new Set(marks).size).toBe(CHANNELS.length)
  })
})
