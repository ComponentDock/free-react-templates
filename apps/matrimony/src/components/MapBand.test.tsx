import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MapBand } from './MapBand'
import { MAP_LABEL } from '../lib/site'

describe('MapBand', () => {
  it('embeds a keyless map under the design desaturated filter', () => {
    const { container } = render(<MapBand />)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveClass('h-[235px]')

    const frame = container.querySelector('div') as HTMLElement

    expect(frame).toHaveClass('grayscale')

    const map = screen.getByTitle(MAP_LABEL)
    const src = map.getAttribute('src') ?? ''

    expect(src).toContain('openstreetmap.org/export/embed.html')
    expect(src).not.toContain('key=')
    expect(src).not.toContain('googleapis')
    expect(map).toHaveAttribute('loading', 'lazy')
    expect(map.tagName).toBe('IFRAME')
  })
})
