import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSkyline } from './HeroSkyline'

describe('HeroSkyline', () => {
  it('draws the app-owned line-art skyline along the hero bottom edge', () => {
    const { container } = render(<HeroSkyline />)

    const skyline = container.querySelector('svg')!
    expect(skyline).toHaveAttribute('aria-hidden', 'true')
    expect(skyline).toHaveAttribute('viewBox', '0 0 1440 400')
    expect(skyline).toHaveAttribute('preserveAspectRatio', 'xMidYMax slice')
    expect(skyline).toHaveClass('absolute', 'bottom-0', 'z-[3]', 'w-full')
  })

  it('fills twelve violet towers with outline strokes and window dots', () => {
    const { container } = render(<HeroSkyline />)

    const towers = Array.from(container.querySelectorAll('rect[fill="#4d1d85"]'))
    expect(towers).toHaveLength(12)
    towers.forEach((tower) => {
      expect(tower).toHaveAttribute('stroke', 'rgba(213,223,227,.55)')
    })

    expect(container.querySelectorAll('rect[fill="#1befc5"]').length).toBeGreaterThan(0)
  })
})
