import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CloudLayer } from './CloudLayer'

describe('CloudLayer', () => {
  it('drifts four decorative clouds across the hero on the 60s loop', () => {
    const { container } = render(<CloudLayer />)

    const layer = container.firstElementChild!
    expect(layer).toHaveAttribute('aria-hidden', 'true')

    const clouds = Array.from(layer.querySelectorAll('svg'))
    expect(clouds).toHaveLength(4)
    expect(clouds.map((cloud) => cloud.getAttribute('class'))).toEqual([
      expect.stringContaining('top-[147px]'),
      expect.stringContaining('top-[204px]'),
      expect.stringContaining('top-[332px]'),
      expect.stringContaining('top-[353px]'),
    ])

    expect(clouds.map((cloud) => (cloud as SVGElement).style.animationDelay)).toEqual([
      '-39s',
      '-6s',
      '-45s',
      '-15s',
    ])
  })

  it('starts every sprite mid-flight, 138px to the left of the band', () => {
    const { container } = render(<CloudLayer />)

    for (const cloud of container.querySelectorAll('svg')) {
      expect(cloud).toHaveClass(
        'absolute',
        '-left-[138px]',
        'w-[138px]',
        'animate-cloud',
        'motion-reduce:animate-none',
      )
    }
  })

  it('layers the lowest cloud behind the skyline', () => {
    const { container } = render(<CloudLayer />)

    const clouds = Array.from(container.querySelectorAll('svg'))
    expect(clouds[3]).toHaveClass('z-[2]')
    expect(clouds[0]).toHaveClass('z-[4]')
  })
})
